# React + Vite + Tailwind to Next.js 16 Migration Skill

## Overview
This skill guides the migration of a React application built with Vite and Tailwind CSS to Next.js 16 with App Router, maintaining existing component structure and styling.

## Key Migration Steps

### 1. Project Setup
- Initialize Next.js 16 project with TypeScript support
- Configure Tailwind CSS for Next.js
- Set up path aliases in `tsconfig.json` and `next.config.js`

### 2. File Structure Transformation
- Convert `src/pages/` components to `app/` directory structure
- Rename `Index.tsx` to `page.tsx` and move to route directories
- Create `layout.tsx` for root layout replacing traditional root component

### 3. Component Migration
- Update component imports to use Next.js conventions
- Replace React Router with Next.js Link and routing
- Update client-side state management if needed
- Add 'use client' directive for interactive components

### 4. Styling Migration
- Preserve Tailwind CSS configuration
- Update global styles import in new layout structure
- Ensure CSS modules work with Next.js if used

### 5. Build Configuration
- Migrate from Vite config to `next.config.js`
- Update environment variables handling
- Configure build optimization settings

### 6. Testing & Validation
- Update test configuration for Next.js
- Verify all routes work with new app router
- Test component rendering and styling

### 7. Test Case Migration (Vite to Jest)
#### Setup Jest Configuration
- Install Jest and testing dependencies: `npm install --save-dev jest @testing-library/react @testing-library/jest-dom ts-jest @types/jest`
- Create `jest.config.js` in project root
- Update `package.json` with test scripts: `"test": "jest"`

#### Jest Configuration Template
```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
}

module.exports = createJestConfig(customJestConfig)
```

#### Test File Structure
```
src/
  components/
    __tests__/
      ComponentName.test.tsx
  pages/
    __tests__/
      page.test.tsx
```

#### Test File Migration Example
```typescript
// Before (Vite + Vitest)
import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Component from '@/components/Component'

test('Component renders', () => {
  render(<Component />)
  expect(screen.getByRole('heading')).toBeInTheDocument()
})

// After (Jest)
import { render, screen } from '@testing-library/react'
import Component from '@/components/Component'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
```

#### Key Changes
- Replace `test()` with `it()` or `describe()/it()` blocks
- Import test utilities from `@testing-library/react`
- Update module path aliases to match Jest configuration
- Ensure all mocks work with Jest's mock system
- Add `jest.setup.js` for global test configuration

## Common Patterns

### Route Migration
```
src/pages/Index.tsx → app/page.tsx
src/pages/NotFound.tsx → app/not-found.tsx
src/pages/[id].tsx → app/[id]/page.tsx
```

### Layout Structure
```
app/
  layout.tsx (root layout)
  page.tsx (home page)
  components/ (reusable components)
```

### Component Updates
- Add 'use client' at top of interactive components
- Replace `useHistory`/`useNavigate` with Next.js `useRouter`
- Use `Link` component from 'next/link'

## Dependencies to Update
- `next` (v16+)
- Remove Vite dependencies
- Keep: React, Tailwind CSS, TypeScript
- Add Next.js specific dependencies as needed

## Performance Considerations
- Leverage Next.js Image optimization
- Implement dynamic imports for code splitting
- Utilize App Router streaming capabilities
- Configure ISR/SSR as appropriate

## Verification Checklist
- [ ] All routes accessible
- [ ] Styling intact and responsive
- [ ] Components render correctly
- [ ] No console errors
- [ ] Build succeeds without warnings
- [ ] Type checking passes
