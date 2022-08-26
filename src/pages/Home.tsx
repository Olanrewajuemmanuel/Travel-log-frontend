import { LogAction, TravelLog } from "../types"
import { Feed } from "../components/Feed"

interface Props {
  logs: Array<TravelLog>;
}

export const Home: React.FC<Props> = ({ logs }) => {
  return (
    <div className="md:flex justify-center items-center flex-col">
      {
        logs.map((log, index) => 
          <Feed key={index} log={log} />
        )
      }
    </div>
  )
}
