import Header from "@/components/Header";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function Project() {
  return (
    <>
    
    <div className="p-20">
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: "20px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          
        }}
      >
       
      </Container>
      </div>

    </>
  );
}
