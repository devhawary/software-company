# Software Company Website

## Live Deployment

**Demo Site:** [https://software-company.pages.dev/](https://software-company.pages.dev/)

### Project Setup Guide

  

1. Clone the repository:

```bash
git clone https://github.com/hawaryo/software-company.git
```

2. Navigate into the project directory:

  

```bash
cd software-company
```

  

3. Ensure you are on the `Level-two` branch :

 

```bash
git switch Level-two
```

  

4. Install dependencies:

  

```bash
npm install
```

  

5. Run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


---
### Folder Structure

- **Page Location**: Each website page resides in a dedicated folder within the `app` directory.
  - Example: `/app/home/page.jsx`, `/app/contact/page.jsx`


- **Layout Constraints**:
  - Do **not** include `<html>`, `<head>`, or `<body>` tags in your `page.jsx` files. the content you write inside page.jsx automatically wrapped inside  `<body>{you content}</body>` element as defined in layout.jsx
  
  - Do **not** manually import Bootstrap-related CSS, JavaScript, or Icon  libraries in your `page.js` files.
  These resources are **pre-installed** and will function automatically across all pages.



- ❌ Do **not** import:
  - `Bootstrap.css`
  - `BootstrapJS`
  - `BootstrapIcons`


- **Component Organization**:
  - Store page-specific components in a `components` folder within each page's directory.
  - Use **PascalCase** for component and module file names.

#### Naming Convention Examples

- Component File: `HeroSection.jsx`
- Scss File: `HeroSection.module.scss`

-----
## Convert HTML to React  

### 1. **Self-Closing Tags**  

Ensure all self-closing tags are properly formatted. Examples include:  

- Images:  
  ```html
  <img />
  ```  

- Input Fields:  
  ```html
  <input type="text" />
  ```


2. **Change `class` to `className`**  
    
   
   
     ```html
     <div class="container"></div>
     ```  
     Becomes:  
     ```jsx
     <div className="container"></div>
     ```  

3. **Attribute Naming**  
   - Convert attributes to camelCase:  
     - `for` → `htmlFor`  
     - `clip-rule` → `clipRule`  
     - `fill-rule` → `fillRule`  
     - `stroke-linecap` → `strokeLinecap`  



4. **SCSS Modules**  
   - to Use `styles` form scss module:  
   
   
     ```jsx
     <div className={styles.customClass}></div>
     ```  

5. **Bootstrap Classes Compatibility**  
   - Some Bootstrap classes may not work properly when mixed with SCSS modules. For example:  
     ```jsx
     className="accordion-body"
     ```  
     Converting directly to:  
     ```jsx
     className={styles.accordionBody}
     ```  
     **might break behavior**.

   - To handle this, combine Bootstrap classes with SCSS module classes:  
     **Option 1 (Template Literals):**  
     ```jsx
     className={`accordion-body ${styles.myAccordionBody}`}
     ```

     **Option 2 (String Interpolation):**  
     ```jsx
     className={`${'accordion-body'} ${styles.myAccordionBody}`}
     ```

     **Option 3 (Using `classnames` Utility):**  
     ```jsx
     import classNames from 'classnames';
     className={classNames('accordion-body', styles.myAccordionBody)}
     ```

---

## **Paths**  
- Update all paths starting with `./assets` to start with `/` instead.  

Example:  
```jsx
./assets/images/ → /images
```  

-----
### Adding Features

1. Ensure you are on the `Level-two` branch:

```bash
git switch Level-two
```

2. Create a new branch for your task with descriptive name:
le
```bash
git checkout -b feat/adding-footer
```

3. Make your changes.

  

4. Track your changes:

```bash
git add .
```

5. Commit with a meaningful message:

```bash
git commit -m "Adding the FooterSection"
```

6. Push your changes to the new branch:

```bash
git push origin feat/adding-footer
```