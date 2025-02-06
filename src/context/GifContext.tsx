// src/context/GifContext.tsx
import { createContext, useReducer, ReactNode } from 'react';
import { GifContextState, GifContextAction  } from '../types/context';


const initialState: GifContextState = {
  savedGifs: JSON.parse(localStorage.getItem('savedGifs') || '[]'),
};

const gifReducer = (state: GifContextState, action: GifContextAction): GifContextState => {
  switch (action.type) {
    case 'SAVE_GIF':
      const updatedSave = [...state.savedGifs, action.payload];
      localStorage.setItem('savedGifs', JSON.stringify(updatedSave));
      return { savedGifs: updatedSave };
    case 'REMOVE_GIF':
      const updatedRemove = state.savedGifs.filter(gif => gif.id !== action.payload);
      localStorage.setItem('savedGifs', JSON.stringify(updatedRemove));
      return { savedGifs: updatedRemove };
    default:
      return state;
  }
};

export const GifContext = createContext<{
  state: GifContextState;
  dispatch: React.Dispatch<GifContextAction>;
}>({ state: initialState, dispatch: () => null });

export const GifProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gifReducer, initialState);
  return <GifContext.Provider value={{ state, dispatch }}>{children}</GifContext.Provider>;
};
