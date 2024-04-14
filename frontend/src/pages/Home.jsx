import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
/*
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };
*/
    return (

            <div>
              <nav>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="index.html">Inventory</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
              <div id="inventory">
                <h2 className="invtitle">Our Inventory</h2>
                <ul id="car_list">
                  <li className="listing-container">
                    <a href="listings/listing - Copy (2).html">
                      <div className="inv">
                        <img className="invimg" src="images/2/s-l1600 (1).jpg" alt="Ford Transit 2021" />
                      </div>
                      <div className="listing-info">
                        <h1>Ford transit 2015</h1>
                        <p className="description">Wood lined, spare key, new MOT on purchase, just off service from Lex Leasing, Euro 6 go any place. Pictures to follow. Licenced Credit Broker finance arranged.</p>
                        <h2>13,194.00</h2>
                        <div className="buttons">
                          <button>View Details</button>
                          <button>Contact Us</button>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* Repeat the above structure for other listings */}
                </ul>
              </div>
              <footer>
                <div id="footer">
                  <p>Locatated at : Kirk st Dundee DD2 3EN</p>
                  <p>&copy; Gowanbank Garage 2024</p>
                </div>
              </footer>
            </div>
          );
          
    
}

export default Home;
