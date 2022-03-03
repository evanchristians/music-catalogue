type Song = {
  artist: string;
  title: string;
  album: string;
  genre: string;
};

type StateObject = {
  music: Song[];
};

type State = Map<"music", Song[]>;

type Pair = [key: string, val: any];
