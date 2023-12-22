import Header from "@/components/Header";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Layout from "@/components/Layout";

export default function Project() {
  return (
    <>
     <Layout>
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
        <Card
          sx={{
            borderRadius: "15px",
            height: "400px",
            
          }}
        >
          <CardActionArea>
            <div data-aos="fade-right">
              <CardMedia
                sx={{ height: "100%", width: "100%" }}
                component="video"
                alt="video"
                muted
                loop
                autoPlay
              >
                <source src="/curlybrace.mp4" type="video/mp4" />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Curlybrace
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "justify" }}>
                  Application mettant en relation les développeurs(euses) à
                  l'international. <br /> <b>Stack technique</b> : Redux,
                  géocodage, React-three- fiber, Hooks, API, react-router-dom,
                  Cloudinary, messagerie
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>

        {/*2ème carte*/}
        <Card
          sx={{
            borderRadius: "15px",
            height: "400px",
          }}
        >
          <CardActionArea>
            <div data-aos="fade-right">
              <CardMedia
                sx={{ height: "100%", width: "100vw" }}
                component="video"
                controls
                alt="video"
              >
                <source
                  src="/adele-someone-like-you_843273.mp4"
                  type="video/mp4"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Proxibanque
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "justify" }}>
                  Logiciel de banque permettant de gérer les comptes
                  clients,visualiser les transactions, faire une simulation de
                  crédit et faire des opérations CRUD.
                  <br /> <b>Stack technique</b>: Angular, SpringMVC, DTO,
                  Mapper, Maven, JPA
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
        {/*3ème carte*/}
        <Card
          sx={{
            borderRadius: "15px",
            height: "400px",
          }}
        >
          <CardActionArea>
            <div data-aos="fade-right">
              <CardMedia
                sx={{ height: "100%", width: "100vw" }}
                component="video"
                controls
                alt="video"
              >
                <source
                  src="/adele-someone-like-you_843273.mp4"
                  type="video/mp4"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Morning news
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "justify" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
        {/*4ème carte*/}
        <Card
          sx={{
            borderRadius: "15px",
            height: "400px",
          }}
        >
          <CardActionArea>
            <div data-aos="fade-right">
              <CardMedia
                sx={{ height: "100%", width: "100vw" }}
                component="video"
                controls
                alt="video"
              >
                <source
                  src="/adele-someone-like-you_843273.mp4"
                  type="video/mp4"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  MyMoviz
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "justify" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
        {/*5ème carte*/}
        <Card
          sx={{
            borderRadius: "15px",
            height: "400px",
          }}
        >
          <CardActionArea>
            <div data-aos="fade-right">
              <CardMedia
                sx={{ height: "100%", width: "100vw" }}
                component="video"
                controls
                alt="video"
              >
                <source
                  src="/adele-someone-like-you_843273.mp4"
                  type="video/mp4"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Locapic
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "justify" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </Container>
      </div>
      </Layout>
    </>
  );
}
