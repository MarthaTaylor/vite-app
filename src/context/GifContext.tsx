// src/context/GifContext.tsx
import { createContext, useReducer, ReactNode } from 'react';
import { Gif } from '../types/gif';

interface State {
  savedGifs: Gif[];
}

type Action =
  | { type: 'SAVE_GIF'; payload: Gif }
  | { type: 'REMOVE_GIF'; payload: string };

const initialState: State = {
  savedGifs: JSON.parse(localStorage.getItem('savedGifs') || '[]'),
};

const gifReducer = (state: State, action: Action): State => {
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
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const GifProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gifReducer, initialState);
  return <GifContext.Provider value={{ state, dispatch }}>{children}</GifContext.Provider>;
};
