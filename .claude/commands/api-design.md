---
name: api-design
description: REST API design patterns including resource naming, status codes, pagination, filtering, error responses, versioning, and rate limiting for production APIs.
origin: ECC
---

# API Design Patterns

Conventions and best practices for designing consistent, developer-friendly REST APIs.

## When to Activate

- Designing new API endpoints
- Reviewing existing API contracts
- Adding pagination, filtering, or sorting
- Implementing error handling for APIs
- Planning API versioning strategy
- Building public or partner-facing APIs

## Resource Design

### URL Structure

```
# Resources are nouns, plural, lowercase, kebab-case
GET    /api/v1/users
GET    /api/v1/users/:id
POST   /api/v1/users
PATCH  /api/v1/users/:id
DELETE /api/v1/users/:id

# Sub-resources for relationships
GET    /api/v1/users/:id/orders
POST   /api/v1/users/:id/orders

# Actions that don't map to CRUD (use verbs sparingly)
POST   /api/v1/orders/:id/cancel
POST   /api/v1/auth/refresh
```

### Naming Rules

```
# GOOD
/api/v1/team-members          # kebab-case for multi-word resources
/api/v1/orders?status=active  # query params for filtering

# BAD
/api/v1/getUsers              # verb in URL
/api/v1/user                  # singular (use plural)
/api/v1/team_members          # snake_case in URLs
```

## HTTP Methods and Status Codes

| Method | Idempotent | Use For |
|--------|-----------|---------|
| GET | Yes | Retrieve resources |
| POST | No | Create resources, trigger actions |
| PUT | Yes | Full replacement of a resource |
| PATCH | No | Partial update |
| DELETE | Yes | Remove a resource |

### Status Code Reference

```
# Success
200 OK              — GET, PUT, PATCH (with body)
201 Created         — POST (include Location header)
204 No Content      — DELETE (no body)

# Client Errors
400 Bad Request     — Validation failure, malformed JSON
401 Unauthorized    — Missing or invalid authentication
403 Forbidden       — Authenticated but not authorized
404 Not Found       — Resource doesn't exist
409 Conflict        — Duplicate entry, state conflict
422 Unprocessable   — Semantically invalid (valid JSON, bad data)
429 Too Many Requests

# Server Errors
500 Internal Server Error  — Never expose internal details
503 Service Unavailable    — Include Retry-After
```

### Common Mistakes

```
# BAD: 200 for everything
{ "status": 200, "success": false, "error": "Not found" }

# GOOD: Use HTTP status codes semantically
HTTP/1.1 404 Not Found
{ "error": { "code": "not_found", "message": "User not found" } }
```

## Response Format

### Success Response

```json
{
  "data": {
    "id": "abc-123",
    "email": "alice@example.com",
    "created_at": "2025-01-15T10:30:00Z"
  }
}
```

### Collection Response

```json
{
  "data": [
    { "id": "abc-123", "name": "Alice" }
  ],
  "meta": {
    "total": 142,
    "page": 1,
    "per_page": 20,
    "total_pages": 8
  },
  "links": {
    "self": "/api/v1/users?page=1",
    "next": "/api/v1/users?page=2"
  }
}
```

### Error Response

```json
{
  "error": {
    "code": "validation_error",
    "message": "Request validation failed",
    "details": [
      { "field": "email", "message": "Must be a valid email", "code": "invalid_format" }
    ]
  }
}
```

## Pagination

| Use Case | Type |
|----------|------|
| Admin dashboards, small datasets | Offset |
| Infinite scroll, feeds, large datasets | Cursor |
| Public APIs | Cursor (default) |

### Cursor-Based

```
GET /api/v1/users?cursor=eyJpZCI6MTIzfQ&limit=20
```

```json
{
  "data": [...],
  "meta": { "has_next": true, "next_cursor": "eyJpZCI6MTQzfQ" }
}
```

## Filtering and Sorting

```
# Equality
GET /api/v1/orders?status=active

# Comparison (bracket notation)
GET /api/v1/products?price[gte]=10&price[lte]=100

# Sorting (prefix - for descending)
GET /api/v1/products?sort=-created_at,price
```

## Versioning Strategy

```
1. Start with /api/v1/ — don't version until needed
2. Maintain at most 2 active versions
3. Non-breaking: adding fields, optional params, new endpoints
4. Breaking: removing/renaming fields, changing types, URL changes
5. Deprecation: 6 months notice, add Sunset header
```

## TypeScript / Next.js Implementation

```typescript
import { z } from 'zod'
import { NextRequest, NextResponse } from 'next/server'

const createSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = createSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({
      error: {
        code: 'validation_error',
        message: 'Request validation failed',
        details: parsed.error.issues.map(i => ({
          field: i.path.join('.'),
          message: i.message,
          code: i.code,
        })),
      },
    }, { status: 422 })
  }

  const user = await createUser(parsed.data)

  return NextResponse.json(
    { data: user },
    { status: 201, headers: { Location: `/api/v1/users/${user.id}` } },
  )
}
```

## API Design Checklist

Before shipping a new endpoint:

- [ ] URL follows naming conventions (plural, kebab-case, no verbs)
- [ ] Correct HTTP method used
- [ ] Appropriate status codes returned
- [ ] Input validated with Zod schema
- [ ] Error responses follow standard format
- [ ] Pagination implemented for list endpoints
- [ ] Authentication required (or explicitly public)
- [ ] Authorization checked
- [ ] Response does not leak stack traces or SQL errors
- [ ] Consistent naming with existing endpoints
