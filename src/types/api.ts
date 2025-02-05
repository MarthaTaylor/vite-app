import { Gif } from "./gif";

// api interface
export interface ApiResponse {
    data: Gif[];
    pagination: {
      total_count: number;
      count: number;
      offset: number;
    };
  }
