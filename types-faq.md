# Using Types - FAQ

- [My build is broken! I don't have time to fix it all, can i opt out of all types for now?](#Can-i-opt-out-of-all-types)
- [Can i opt out only of specific types that break my build but still get all other types of wix-style-react?](#Can-i-opt-out-only-of-specific-types)
- [Why did my components got broken with the new types?](#Why-did-my-components-got-broken-with-the-new-types)
    - [You are using `string`, but now with types it is too permissive](#You-are-using-`string`-but-now-with-types-it-is-too-permissive)
    - [You are passing a function which is too permissive](#You-are-passing-a-function-which-is-too-permissive)
### Can i opt out of all types?
  
Yes, add this to your tsconfig.json:
```jsx
"files": ["./node_modules/wix-style-react/src/ignore.d.ts"]
```
  
### Can i opt out only of specific types?
    
Unfortunailty this can be done only if you are still using "cherry picked" imports:
```jsx
import Button from wix-style-react/Button
import Accordion from wix-style-react/Accordion
import Table from wix-style-react/Table
```
In that case, if you want to only ignore  `Accordion` types but still get the types for the other components that you imported - `Table` and `Button`, you can do the following:
    
Create a new file `ignore-wsr-types.d.ts`:
```jsx
declare module 'wix-style-react/Accordion';
``` 
Add this to your tsconfig.json:
```jsx
"files": ["./node_modules/wix-style-react/src/ignore.d.ts"] 
```
 
### Why did my components got broken with the new types?
    
#### You are using `string`, but now with types it is too permissive:
```jsx
const size: string;
<Button size={size}/>
```
   
The correct code now with types would be:
```jsx
const size: ButtonSize

OR

const size: 'tiny' | 'small' | 'medium' | 'large';   
<Button size={size}/>
```

#### You are passing a function which is too permissive:
```jsx
 const onClick: Function
 <Button onClick={onClick}/>
```

The correct code would be:
```jsx
 const onClick: React.MouseEventHandler<HTMLElement>;
 <Button onClick={onClick}/>
```
   
Don't have time for it now and want a quick fix?
```jsx
 <Button onClick={onClick as any}/>
```
   

   
