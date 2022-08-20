import { LogAction, LogActionType, TravelLog, TravelLogState } from "../types";

const initialState: TravelLogState = [
  {
    id: 1,
    userhasLikedFeed: true,
    user: {
      username: "Lary_xplora",
    },
    dateModified: new Date(),
    rating: 4,
    caption: "A great place to see really.",
    location: "Bali, Indonesia",
    imgSet: [require("../assets/Bali,Indonesia.jpg")],
    likes: 8,
    visited: true,
  },
  {
    id: 2,
    user: {
      username: "123_Explora",
    },
    userhasLikedFeed: false,
    dateModified: new Date("2022, 06, 19"),
    rating: 4,
    caption: "Serene.",
    location: "Plitvice Lakes Croatia",
    imgSet: [require("../assets/Plitvice-Lakes-Croatia.jpg.webp")],
    likes: 4,
    visited: false,
  },
  {
    id: 3,
    user: {
      username: "D-Heights",
    },
    userhasLikedFeed: false,
    dateModified: new Date(),
    rating: 4,
    caption: "Taj Mahal baby... #livinglife",
    location: "Taj-Mahal India",
    imgSet: [require("../assets/Taj-Mahal-India.jpg.webp")],
    likes: 4,
    visited: true,
  },
];

function reducer(state: TravelLogState, action: LogAction): TravelLogState {
  switch (action.type) {
    case LogActionType.BOOKMARK:
      const getLog = state.map((log) => {
        if (log.id === action.payload.id) {
          const newLog = {
            ...log,
            visited: !log.visited,
          };
          return newLog;
        } else {
          return log;
        }
      });
      return getLog;
    case LogActionType.LIKE:
      const likedLog = state.map((log) => {
        let newLog;
        if (log.id === action.payload.id) {
          if (log.userhasLikedFeed === false) {
            // user has not liked post
            newLog = {
              ...log,
              likes: log.likes + 1,
              userhasLikedFeed: true
            };
          } else {
            // has already liked
            newLog = {
              ...log,
              likes: log.likes - 1,
              userhasLikedFeed: false 
            }
          }

          return newLog;
        } else {
          return log;
        }
      });

      return likedLog;

    default:
      return state;
  }
}

export { initialState, reducer };
