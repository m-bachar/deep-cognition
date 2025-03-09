import "./Solutions.css";
import EmailIcon from "@mui/icons-material/Email";
import Laptop1 from "../assets/laptop-1.png";
import Equipe from "../assets/equipe.jpg";
import Vision from "../assets/vision.jpg";
import Mission from "../assets/mission.jpeg";
import Technology from "../assets/technology.png";
import { Button } from "@mui/material";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="first">
        <div className="first-half">
          <h1>Révolutionnez vos métiers avec nos solutions innovantes.</h1>
          <p>
            Deep Cognition propose des solutions basées sur l’IA pour
            automatiser et optimiser les processus métiers, en s’adaptant aux
            besoins changeants des clients, et ce, quel que soit le secteur ou
            la taille de l'entreprise.
          </p>
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            sx={{
              backgroundColor: "rgb(99, 102, 241)",
              "&:hover": {
                backgroundColor: "rgb(79, 85, 191)",
              },
              fontSize: "1.1rem",
              fontWeight: "normal",
            }}
          >
            {" "}
            Contactez-Nous
          </Button>
        </div>
        <div className="second-half">
          <img src={Laptop1} alt="Laptop 1" />
        </div>
      </div>
      <div className="second">
        <div className="vision">
          <div className="second-img">
            <img src={Vision} alt="Notre Vision" />
          </div>
          <div className="second-text">
            <h2>Notre Vision</h2>
            <div className="separator"></div>
            <p>
              Nous voulons démocratiser l’accès aux technologies intelligentes
              pour permettre à chaque entreprise, dans n’importe quel secteur,
              de se concentrer sur ses priorités stratégiques.
            </p>
            <p>
              Notre vision est de libérer les métiers de leurs tâches
              répétitives grâce à l’automatisation, afin de stimuler
              l’innovation et la croissance, tout en rendant ces solutions
              accessibles à tous, quelle que soit la complexité des besoins.
            </p>
          </div>
        </div>
        <div className="mission">
          <div className="second-text">
            <h2>Notre Mission</h2>
            <div className="separator"></div>
            <p>
              Nous sommes convaincus que la transformation digitale doit être
              accessible à tous. Notre mission est d’accompagner les entreprises
              de toutes tailles dans cette transformation en leur offrant des
              solutions intelligentes et flexibles, capables de s’adapter à
              différents secteurs et métiers.
            </p>
            <p>
              Nous fournissons des produits qui optimisent la performance,
              facilitent la prise de décision et permettent à chaque
              organisation de prospérer dans un environnement en rapide
              évolution.
            </p>
          </div>
          <div className="second-img">
            <img src={Mission} alt="Notre Mission" />
          </div>
        </div>
        <div className="equipe">
          <div className="second-img">
            <img src={Equipe} alt="Notre Equipe" />
          </div>
          <div className="second-text">
            <h2>Notre Équipe</h2>
            <div className="separator"></div>
            <p>
              Notre équipe pluridisciplinaire associe l'agilité et la créativité
              d'une startup à une expertise approfondie en intelligence
              artificielle, gestion des données et développement de solutions
              innovantes.
            </p>
            <p>
              Grâce à une approche collaborative et centrée sur les besoins des
              clients, nous créons des solutions évolutives et intelligentes,
              permettant à nos clients de relever leurs défis avec agilité et
              efficacité, tout en restant à la pointe de l'innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="third">
        <div className="first-half">
          <h2>Notre Engagement</h2>
          <div className="separator"></div>
          <p>
            Nos engagements incarnent notre vision d'une IA innovante, agile et
            accessible.
          </p>
        </div>
        <div className="second-half">
          <div className="first-col">
            <div className="card">
              <InsertEmoticonOutlinedIcon
                sx={{
                  fontSize: "5rem",
                  marginTop: "25px",
                  marginBottom: "25px",
                  marginLeft: "10%",
                  color: "rgb(99, 102, 241)",
                }}
              />
              <h3>Customer Centric</h3>
              <p>
                Notre approche est fondée sur une compréhension approfondie des
                besoins de nos clients, assurant des solutions parfaitement
                adaptées à leurs enjeux spécifiques.
              </p>
            </div>
            <div className="card">
              <MilitaryTechOutlinedIcon
                sx={{
                  fontSize: "5rem",
                  marginTop: "25px",
                  marginBottom: "25px",
                  marginLeft: "10%",
                  color: "rgb(99, 102, 241)",
                }}
              />
              <h3>Excellence</h3>
              <p>
                Nous maintenons les plus hauts standards de qualité et de
                sécurité, quel que soit le domaine d'application.
              </p>
            </div>
          </div>
          <div className="second-col">
            <div className="card">
              <HandshakeOutlinedIcon
                sx={{
                  fontSize: "5rem",
                  marginTop: "25px",
                  marginBottom: "25px",
                  marginLeft: "10%",
                  color: "rgb(99, 102, 241)",
                }}
              />
              <h3>Partenariat</h3>
              <p>
                Nous nous positionnons comme un véritable partenaire
                stratégique, aligné sur les objectifs à long terme de nos
                clients dans tous les secteurs.
              </p>
            </div>
            <div className="card">
              <KeyOutlinedIcon
                sx={{
                  fontSize: "5rem",
                  marginTop: "25px",
                  marginBottom: "25px",
                  marginLeft: "10%",
                  color: "rgb(99, 102, 241)",
                }}
              />
              <h3>Accessibilité</h3>
              <p>
                Nous nous engageons à rendre nos produits intelligents
                accessibles et pertinents pour tous les métiers, quelle que soit
                leur industrie ou la taille de l'entreprise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="forth">
        <div className="first-half">
          <h2>Technologie de pointe</h2>
          <div className="separator"></div>
          <p id="para">
            Deep Cognition développe des produits d'IA de pointe pour
            transformer les métiers en exploitant les dernières avancées
            technologiques.
          </p>
          <div className="col">
            <div className="row">
              <h3>
                <TipsAndUpdatesOutlinedIcon
                  sx={{
                    fontSize: "2rem",
                    marginRight: "10px",
                  }}
                />
                Vision
              </h3>
              <p>Transformation digitale business-centric.</p>
            </div>
            <div className="row">
              <h3>
                <PsychologyOutlinedIcon
                  sx={{
                    fontSize: "2rem",
                    marginRight: "10px",
                  }}
                />
                Expertise
              </h3>
              <p>Équipes hautement qualifiées en IA.</p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h3>
                <SmartToyOutlinedIcon
                  sx={{
                    fontSize: "2rem",
                    marginRight: "10px",
                  }}
                />
                Innovation
              </h3>
              <p>Développement de solutions uniques.</p>
            </div>
            <div className="row">
              <h3>
                <CodeOutlinedIcon
                  sx={{
                    fontSize: "2rem",
                    marginRight: "10px",
                  }}
                />
                Évolutif
              </h3>
              <p>Produits en constante évolution.</p>
            </div>
          </div>
        </div>
        <div className="second-half">
          <img src={Technology} alt="Technology Solutions" />
        </div>
      </div>
      <div className="fifth">
        <h2>Découvrez l'IA révolutionnaire</h2>
        <div className="separator"></div>
        <p>
          Deep Cognition développe des produits end-to-end qui automatisent les
          tâches et se basent sur les données et l'intelligence artificielle
          pour booster la productivité et la compétitivité de nos clients.
        </p>
        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          sx={{
            backgroundColor: "rgb(99, 102, 241)",
            "&:hover": {
              backgroundColor: "rgb(79, 85, 191)",
            },
            fontSize: "1.1rem",
            fontWeight: "normal",
          }}
        >
          {" "}
          Discutez avec un expert
        </Button>
      </div>
    </div>
  );
};

export default Solutions;
