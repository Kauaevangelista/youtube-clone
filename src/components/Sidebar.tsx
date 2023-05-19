import { Stack } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarProps) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('New')}
        style={{
            // @ts-ignore
          background:
            "New" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "New" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<HomeIcon />}
        </span>
        <span
          style={{
            opacity:
              "New" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"New"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('JS Mastery')}
        style={{
            // @ts-ignore
          background:
            "JS Mastery" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "JS Mastery" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<CodeIcon />}
        </span>
        <span
          style={{
            opacity:
              "JS Mastery" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"JS Mastery"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Gym')}
        style={{
            // @ts-ignore
          background:
            "Gym" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Gym" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<FitnessCenterIcon />}
        </span>
        <span
          style={{
            opacity:
              "Gym" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Gym"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Comedy')}
        style={{
            // @ts-ignore
          background:
            "Comedy" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Comedy" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<TheaterComedyIcon />}
        </span>
        <span
          style={{
            opacity:
              "Comedy" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Comedy"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Coding')}
        style={{
            // @ts-ignore
          background:
            "Coding" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Coding" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<CodeIcon />}
        </span>
        <span
          style={{
            opacity:
              "Coding" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Coding"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Gaming')}
        style={{
            // @ts-ignore
          background:
            "Gaming" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Gaming" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<SportsEsportsIcon />}
        </span>
        <span
          style={{
            opacity:
              "Gaming" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Gaming"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Sport')}
        style={{
            // @ts-ignore
          background:
            "Sport" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Sport" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<FitnessCenterIcon />}
        </span>
        <span
          style={{
            opacity:
              "Sport" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Sport"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('ReactJS')}
        style={{
            // @ts-ignore
          background:
            "ReactJS" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "ReactJS" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<CodeIcon />}
        </span>
        <span
          style={{
            opacity:
              "ReactJS" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"ReactJS"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Music')}
        style={{
            // @ts-ignore
          background:
            "Music" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Music" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<MusicNoteIcon />}
        </span>
        <span
          style={{
            opacity:
              "Music" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Music"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Education')}
        style={{
            // @ts-ignore
          background:
            "Education" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Education" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<SchoolIcon />}
        </span>
        <span
          style={{
            opacity:
              "Education" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Education"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Podcast')}
        style={{
            // @ts-ignore
          background:
            "Podcast" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Podcast" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<GraphicEqIcon />}
        </span>
        <span
          style={{
            opacity:
              "Podcast" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Podcast"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Movie')}
        style={{
            // @ts-ignore
          background:
            "Movie" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Movie" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<OndemandVideoIcon />}
        </span>
        <span
          style={{
            opacity:
              "Movie" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Movie"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Live')}
        style={{
            // @ts-ignore
          background:
            "Live" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Live" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<LiveTvIcon />}
        </span>
        <span
          style={{
            opacity:
              "Live" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Live"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Fashion')}
        style={{
            // @ts-ignore
          background:
            "Fashion" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Fashion" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<CheckroomIcon />}
        </span>
        <span
          style={{
            opacity:
              "Fashion" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Fashion"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Crypto')}
        style={{
            // @ts-ignore
          background:
            "Crypto" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Crypto" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<DeveloperModeIcon />}
        </span>
        <span
          style={{
            opacity:
              "Crypto" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Crypto"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('NextJS')}
        style={{
            // @ts-ignore
          background:
            "NextJS" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "NextJS" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<CodeIcon />}
        </span>
        <span
          style={{
            opacity:
              "NextJS" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"NextJS"}
        </span>
      </button>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory('Beauty')}
        style={{
            // @ts-ignore
          background:
            "Beauty" === selectedCategory && "#FC1503",
          color: "white",
        }}>
        <span
          style={{
            color:
              "Beauty" === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {<FaceRetouchingNaturalIcon />}
        </span>
        <span
          style={{
            opacity:
              "Beauty" === selectedCategory ? "1" : "0.8",
          }}
        >
          {"Beauty"}
        </span>
      </button>
  </Stack>
);

export default Sidebar;
