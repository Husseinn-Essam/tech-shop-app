"use client";
import React, { createContext, useContext, useReducer } from "react";

// type Category = "Electronics" | "Clothing" | "Accessories" | "Books";
type SortOption = "default" | "price" | "rating";

interface CategoryFilterState {
  selectedCategories: string[];
  sort: SortOption;
  search: string;
}

type CategoryFilterAction =
  | { type: "TOGGLE_CATEGORY"; category: string }
  | { type: "SET_SORT"; sort: SortOption }
  | { type: "SET_SEARCH"; search: string };

interface CategoryFilterContextType {
  state: CategoryFilterState;
  dispatch: React.Dispatch<CategoryFilterAction>;
}
const CategoryFilterContext = createContext<
  CategoryFilterContextType | undefined
>(undefined);

const categoryFilterReducer = (
  state: CategoryFilterState,
  action: CategoryFilterAction
) => {
  switch (action.type) {
    case "TOGGLE_CATEGORY":
      if (state.selectedCategories.includes(action.category)) {
        return {
          ...state,
          selectedCategories: state.selectedCategories.filter(
            (cat) => cat !== action.category
          ),
        };
      } else {
        return {
          ...state,
          selectedCategories: [...state.selectedCategories, action.category],
        };
      }
    case "SET_SORT":
      return { ...state, sort: action.sort };
    case "SET_SEARCH":
      return { ...state, search: action.search };
    default:
      return state;
  }
};
interface CategoryFilterProviderProps {
  children: React.ReactNode;
}

const CategoryFilterProvider: React.FC<CategoryFilterProviderProps> = ({
  children,
}: {
  children: React.ReactNode;
}): any => {
  const [state, dispatch] = useReducer(categoryFilterReducer, {
    selectedCategories: [],
    sort: "default",
    search: "",
  });

  return (
    <>
      <CategoryFilterContext.Provider value={{ state, dispatch }}>
        {children}
      </CategoryFilterContext.Provider>
    </>
  );
};

const useCategoryFilter = () => {
  const context = useContext(CategoryFilterContext);
  if (!context) {
    throw new Error(
      "useCategoryFilter must be used within a CategoryFilterProvider"
    );
  }
  return context;
};

export { CategoryFilterProvider, useCategoryFilter };
