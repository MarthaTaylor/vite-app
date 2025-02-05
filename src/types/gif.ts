//gif types interface
export interface Gif {
    id: string;
    title: string;
    images: {
      original: {
        url: string;
      };
    };
  }
