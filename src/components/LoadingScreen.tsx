import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {/* <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div> */}
      <img
            className="h-10 w-10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVR4nO2Zy0oDQRBFG/0CF4FkUH9ExBcu1HyOSXAbstG/8Y1KXJh/iWShJMGFUcyR1hZDIBmZ6pfQF4ZhFrlVh7rDNBWlhAKqQBt4obj0b++BfWk/RSFa2FfTN4SehNYrcAhUBF4VoGa88DoZEwWtmkXPuvG8s+X5l6JDUzQzzx1BnDrGIzPPfZ8gHxZBHqZACAHSsOjZCAkyMtmWvOyZgRiFBHEiFQBkE7gEeoK+e8ZjPSTIgmXfL9n0zCuYQOYJI+VL/3YiwMGMU64TkKlTcdWWeZPZcgkyqZbUeI/58gWCaDL6JEo8IG2JcT8ikKHE+D3HfNUixEpOLVyCXOkGLEAsm2OKM5An4lFfAnJNPLqRgOwA49AEfPewWxjEwNQDw4yBIynEorlvAKdAF3j2dHWBM2BrspeiIBdASQUWUNLvq8TgDRgAJ8AaUAaWPF1lU/P458MsBYlGKoGQJuJEKkWLFC0nUilapGg5kUrRIkXLiVSKFilaTqRStIhqrzWQTERvEmPRrQRkO+21Ytprqd/J6P/T9Y7p0eNeS9c616nIa/ATcA77JAZyghEAAAAASUVORK5CYII="
          />
      <span className="loading loading-dots loading-lg text-secondary"></span>
    </div>
  );
};

export default LoadingScreen;
