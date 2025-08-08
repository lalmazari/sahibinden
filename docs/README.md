# Marketplace Listing Platform - Complete Documentation

## 🏗️ Project Overview

A comprehensive marketplace platform for product listings with commenting functionality. The platform consists of multiple applications with a microservices architecture, containerized with Docker and orchestrated with Kubernetes.

### Core Features
- Product listings (no buying/selling)
- User comments on products
- User authentication and management
- Admin panel for content moderation
- Cross-platform availability (Web + Mobile)

### Technology Stack
- **Frontend Web**: Next.js 14+ (TypeScript)
- **Mobile App**: React Native (TypeScript)  
- **Admin Panel**: Next.js 14+ (TypeScript)
- **Backend**: Node.js with TypeScript (Microservices)
- **Database**: PostgreSQL
- **Container**: Docker
- **Orchestration**: Kubernetes
- **API Documentation**: OpenAPI/Swagger

---

## 📁 Project Structure

```
marketplace-platform/
├── apps/
│   ├── web-app/                    # Next.js User Web Application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── (auth)/
│   │   │   │   │   ├── login/
│   │   │   │   │   └── register/
│   │   │   │   ├── products/
│   │   │   │   │   ├── [id]/
│   │   │   │   │   └── create/
│   │   │   │   ├── profile/
│   │   │   │   ├── globals.css
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   ├── forms/
│   │   │   │   ├── layout/
│   │   │   │   └── product/
│   │   │   ├── lib/
│   │   │   │   ├── api/
│   │   │   │   ├── auth/
│   │   │   │   ├── hooks/
│   │   │   │   └── utils/
│   │   │   ├── types/
│   │   │   └── constants/
│   │   ├── public/
│   │   ├── package.json
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   └── Dockerfile
│   │
│   ├── mobile-app/                 # React Native Mobile Application
│   │   ├── src/
│   │   │   ├── screens/
│   │   │   │   ├── auth/
│   │   │   │   ├── products/
│   │   │   │   ├── profile/
│   │   │   │   └── comments/
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   ├── forms/
│   │   │   │   └── product/
│   │   │   ├── navigation/
│   │   │   ├── services/
│   │   │   │   └── api/
│   │   │   ├── hooks/
│   │   │   ├── types/
│   │   │   ├── utils/
│   │   │   └── constants/
│   │   ├── assets/
│   │   ├── android/
│   │   ├── ios/
│   │   ├── package.json
│   │   ├── metro.config.js
│   │   └── Dockerfile
│   │
│   └── admin-panel/                # Next.js Admin Web Application
│       ├── src/
│       │   ├── app/
│       │   │   ├── (dashboard)/
│       │   │   │   ├── users/
│       │   │   │   ├── products/
│       │   │   │   ├── comments/
│       │   │   │   ├── analytics/
│       │   │   │   └── settings/
│       │   │   ├── login/
│       │   │   ├── globals.css
│       │   │   ├── layout.tsx
│       │   │   └── page.tsx
│       │   ├── components/
│       │   │   ├── ui/
│       │   │   ├── dashboard/
│       │   │   ├── tables/
│       │   │   └── charts/
│       │   ├── lib/
│       │   │   ├── api/
│       │   │   ├── auth/
│       │   │   └── utils/
│       │   ├── types/
│       │   └── constants/
│       ├── public/
│       ├── package.json
│       ├── next.config.js
│       ├── tailwind.config.js
│       └── Dockerfile
│
├── services/                       # Backend Microservices
│   ├── api-gateway/
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   ├── middleware/
│   │   │   ├── config/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── Dockerfile
│   │
│   ├── auth-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── middleware/
│   │   │   ├── routes/
│   │   │   ├── config/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── Dockerfile
│   │
│   ├── product-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── config/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── Dockerfile
│   │
│   ├── comment-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── config/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── Dockerfile
│   │
│   ├── user-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── config/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── Dockerfile
│   │
│   └── notification-service/
│       ├── src/
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── models/
│       │   ├── routes/
│       │   ├── config/
│       │   └── index.ts
│       ├── package.json
│       └── Dockerfile
│
├── infrastructure/                 # Infrastructure Configuration
│   ├── kubernetes/
│   │   ├── namespaces/
│   │   ├── deployments/
│   │   ├── services/
│   │   ├── ingress/
│   │   ├── configmaps/
│   │   └── secrets/
│   ├── docker/
│   │   ├── docker-compose.yml
│   │   └── docker-compose.prod.yml
│   ├── database/
│   │   ├── migrations/
│   │   ├── seeds/
│   │   └── schema.sql
│   └── monitoring/
│       ├── prometheus/
│       └── grafana/
│
├── shared/                         # Shared Libraries and Types
│   ├── types/
│   │   ├── api/
│   │   ├── database/
│   │   └── common/
│   ├── constants/
│   ├── utils/
│   └── validation/
│
├── docs/                          # Documentation
│   ├── api/
│   │   ├── openapi.yaml
│   │   └── postman/
│   ├── deployment/
│   ├── development/
│   └── user-guides/
│
├── scripts/                       # Build and Deployment Scripts
│   ├── build.sh
│   ├── deploy.sh
│   ├── dev-setup.sh
│   └── db-migrate.sh
│
├── .github/                       # GitHub Actions
│   └── workflows/
│       ├── ci.yml
│       ├── cd.yml
│       └── tests.yml
│
├── package.json                   # Root package.json
├── lerna.json                     # Monorepo configuration
├── docker-compose.yml             # Development environment
├── README.md
└── .gitignore
```

---

## 🚀 Application Architecture

### Frontend Applications

#### 1. Web Application (Next.js)
**Purpose**: Main user-facing web application for browsing and listing products

**Key Features**:
- Server-side rendering for SEO optimization
- Responsive design for all devices
- Product listing and detailed views
- User authentication and profiles
- Comment system on products
- Image upload and management
- Search and filtering capabilities

**Tech Stack**:
- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- React Hook Form for form management
- SWR/TanStack Query for data fetching
- NextAuth.js for authentication

#### 2. Mobile Application (React Native)
**Purpose**: Cross-platform mobile app providing the same functionality as web

**Key Features**:
- Native performance on iOS and Android
- Push notifications for comments
- Camera integration for product photos
- Offline capability for viewing products
- Biometric authentication support
- Deep linking support

**Tech Stack**:
- React Native with TypeScript
- React Navigation for routing
- React Native Paper for UI components
- Redux Toolkit for state management
- React Query for API calls
- AsyncStorage for offline data

#### 3. Admin Panel (Next.js)
**Purpose**: Administrative interface for platform management

**Key Features**:
- User management and moderation
- Product approval and removal
- Comment moderation
- Analytics and reporting
- System configuration
- Bulk operations

**Tech Stack**:
- Next.js 14+ with TypeScript
- Tailwind CSS + Headless UI
- Chart.js for analytics
- React Table for data display
- Form validation with Zod

---

## 🔧 Backend Services Architecture

### Microservices Overview

#### 1. API Gateway
**Purpose**: Single entry point for all client requests, handles routing, authentication, and rate limiting

**Responsibilities**:
- Request routing to appropriate services
- Authentication and authorization
- Rate limiting and throttling
- Request/response transformation
- API versioning
- CORS handling

**Tech Stack**:
- Express.js with TypeScript
- HTTP proxy middleware
- JWT validation
- Redis for rate limiting
- OpenAPI documentation

#### 2. Auth Service
**Purpose**: Handle user authentication, authorization, and session management

**Responsibilities**:
- User registration and login
- JWT token generation and validation
- Password reset functionality
- OAuth integration (Google, Facebook)
- Role-based access control (RBAC)
- Session management

**Database Tables**:
- users
- user_sessions
- user_roles
- oauth_providers

#### 3. User Service
**Purpose**: Manage user profiles and user-related operations

**Responsibilities**:
- User profile management
- User preferences
- User statistics
- Follow/unfollow functionality
- User search and discovery

**Database Tables**:
- user_profiles
- user_preferences
- user_followers
- user_statistics

#### 4. Product Service
**Purpose**: Handle all product-related operations

**Responsibilities**:
- Product creation, update, deletion
- Product search and filtering
- Category management
- Image upload and processing
- Product analytics
- Product recommendations

**Database Tables**:
- products
- categories
- product_images
- product_tags
- product_analytics

#### 5. Comment Service
**Purpose**: Manage comments and interactions on products

**Responsibilities**:
- Comment creation and management
- Comment moderation
- Reply functionality
- Comment analytics
- Spam detection

**Database Tables**:
- comments
- comment_likes
- comment_reports
- comment_moderation

#### 6. Notification Service
**Purpose**: Handle all notification-related functionality

**Responsibilities**:
- Push notifications for mobile
- Email notifications
- In-app notifications
- Notification preferences
- Notification templates

**Database Tables**:
- notifications
- notification_preferences
- notification_templates
- push_tokens

---

## 🗄️ Database Schema

### PostgreSQL Database Design

```sql
-- Users and Authentication
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email_verified BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    bio TEXT,
    avatar_url VARCHAR(500),
    phone VARCHAR(20),
    location VARCHAR(100),
    website VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id UUID REFERENCES categories(id),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    condition VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    price DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'USD',
    status VARCHAR(20) DEFAULT 'active',
    view_count INTEGER DEFAULT 0,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    image_url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(255),
    sort_order INTEGER DEFAULT 0,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Comments
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES comments(id),
    content TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    likes_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comment_likes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(comment_id, user_id)
);

-- Notifications
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    data JSONB,
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🐳 Docker Configuration

### Service Dockerfiles

Each service includes a Dockerfile optimized for production:

```dockerfile
# Example: Product Service Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
```

### Docker Compose for Development

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: marketplace
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  api-gateway:
    build: ./services/api-gateway
    ports:
      - "8000:8000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://admin:password@postgres:5432/marketplace
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

volumes:
  postgres_data:
```

---

## ☸️ Kubernetes Configuration

### Namespace Configuration
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: marketplace
  labels:
    name: marketplace
```

### Service Deployment Example
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: product-service
  namespace: marketplace
spec:
  replicas: 3
  selector:
    matchLabels:
      app: product-service
  template:
    metadata:
      labels:
        app: product-service
    spec:
      containers:
      - name: product-service
        image: marketplace/product-service:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: database-secret
              key: url
        - name: REDIS_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: redis-url
```

---

## 🔌 API Documentation

### Authentication Endpoints
```
POST /auth/register
POST /auth/login
POST /auth/logout
POST /auth/refresh
POST /auth/forgot-password
POST /auth/reset-password
GET  /auth/verify-email
```

### Product Endpoints
```
GET    /products                 # List products with filtering
POST   /products                 # Create new product
GET    /products/:id             # Get product details
PUT    /products/:id             # Update product
DELETE /products/:id             # Delete product
POST   /products/:id/images      # Upload product images
```

### Comment Endpoints
```
GET    /products/:id/comments     # Get product comments
POST   /products/:id/comments     # Add comment
PUT    /comments/:id              # Update comment
DELETE /comments/:id              # Delete comment
POST   /comments/:id/like         # Like/unlike comment
```

### User Endpoints
```
GET    /users/profile            # Get current user profile
PUT    /users/profile            # Update user profile
GET    /users/:id                # Get public user profile
GET    /users/:id/products       # Get user's products
```

---

## 🚦 Development Setup

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- PostgreSQL 15+
- Redis 7+

### Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd marketplace-platform
```

2. **Install dependencies**
```bash
npm install
npx lerna bootstrap
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development environment**
```bash
docker-compose -f docker-compose.yml up -d
npm run dev
```

5. **Run database migrations**
```bash
npm run db:migrate
npm run db:seed
```

### Development Commands
```bash
# Start all services in development
npm run dev

# Build all applications
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Database operations
npm run db:migrate
npm run db:seed
npm run db:reset
```

---

## 🔐 Security Considerations

### Authentication & Authorization
- JWT tokens with refresh token rotation
- bcrypt for password hashing
- Rate limiting on authentication endpoints
- CSRF protection
- CORS configuration

### Data Protection
- Input validation and sanitization
- SQL injection prevention with parameterized queries
- XSS protection
- File upload restrictions and scanning
- API rate limiting

### Infrastructure Security
- Environment variables for secrets
- Network policies in Kubernetes
- HTTPS enforcement
- Security headers
- Container security scanning

---

## 📊 Monitoring & Analytics

### Application Monitoring
- Health check endpoints for each service
- Prometheus metrics collection
- Grafana dashboards
- Error tracking with Sentry
- Performance monitoring

### Business Analytics
- User engagement metrics
- Product listing analytics
- Comment interaction tracking
- Search analytics
- Admin dashboard with key metrics

---

## 🚀 Deployment Strategy

### Development Environment
- Docker Compose for local development
- Hot reloading for all services
- Seed data for testing

### Staging Environment
- Kubernetes deployment
- CI/CD pipeline with GitHub Actions
- Automated testing
- Database migrations

### Production Environment
- Multi-region Kubernetes deployment
- Load balancing and auto-scaling
- Database backups and replication
- CDN for static assets
- Monitoring and alerting

---

## 📝 Contributing Guidelines

### Code Standards
- TypeScript strict mode
- ESLint and Prettier configuration
- Conventional commit messages
- Unit and integration tests
- Code review process

### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: Feature branches
- `hotfix/*`: Production fixes

---

## 📋 Testing Strategy

### Frontend Testing
- Unit tests with Jest and React Testing Library
- Integration tests for API interactions
- E2E tests with Playwright
- Visual regression testing

### Backend Testing
- Unit tests for business logic
- Integration tests for database operations
- API contract testing
- Load testing with k6

---

## 🎯 Future Enhancements

### Phase 2 Features
- Advanced search with Elasticsearch
- Real-time notifications with WebSockets
- Image recognition for auto-categorization
- Multi-language support
- Social media integration

### Scalability Improvements
- Microservice mesh with Istio
- Event-driven architecture with message queues
- Caching layer with Redis
- CDN integration
- Database sharding

---

This documentation provides a complete foundation for building your marketplace listing platform. Each section can be expanded with more specific implementation details as development progresses.