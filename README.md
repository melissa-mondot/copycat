#Copy Cat

This provides an example of partitioning an app with separtation of concerns:

All logic and state resides in the CopyCatContainer, while the JSX is in CopyCat. The general rule that I learned from this project is that any component that is handling state or complex logic should not also have to render JSX. Separating concerns makes debugging easier!

-- Originally a CodeCademy project
