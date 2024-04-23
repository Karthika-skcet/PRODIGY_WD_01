import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById('about');
      const services = document.getElementById('services');
      const contact = document.getElementById('contact');
      const first = document.getElementById('first');
      const second = document.getElementById('second');
      const third = document.getElementById('third');
      const fourth = document.getElementById('fourth');

      if (about && services && contact && first && second && third && fourth) {
        if (window.scrollY < services.offsetTop - 100) {
          setActiveSection('about');
        } else if (window.scrollY < contact.offsetTop - 100) {
          setActiveSection('services');
        } else if (window.scrollY < first.offsetTop - 100) {
          setActiveSection('contact');
        } else if (window.scrollY < second.offsetTop - 100) {
          setActiveSection('first');
        } else if (window.scrollY < third.offsetTop - 100) {
          setActiveSection('second');
        } else if (window.scrollY < fourth.offsetTop - 100) {
          setActiveSection('third');
        } else {
          setActiveSection('fourth');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav className="Navbar">
        <ul>
          <li><a href="#about">Light House of Alexandria</a></li>
          <li><a href="#services">Great Pyramid of Giza</a></li>
          <li><a href="#contact">Hanging Gardens of Babylon</a></li>
          <li><a href="#first">Statue of Zeus</a></li>
          <li><a href="#second">Temple of Artemis</a></li>
          <li><a href="#third">Mausoleum at Halicarnassus</a></li>
          <li><a href="#fourth">Colossus of Rhodes</a></li>
        </ul>
      </nav>
      <div id="about" className={`Section ${activeSection === 'about' ? 'active' : ''}`}>
        <h2>The Light House of Alexandria</h2>
        <img src='https://www.reise.de/wp-content/uploads/sites/16/leuchtturm-alexandria1.jpeg' width="500px" height="300px" alt="The Light House of Alexandria" />
        <p>The Lighthouse of Alexandria (Egypt): Also known as the Pharos of Alexandria, this lighthouse was built on the island of Pharos in Alexandria, Egypt, around 280 BC. It was one of the tallest man-made structures of the ancient world, standing over 100 meters (330 feet) tall. The lighthouse served as a beacon for sailors and was renowned for its innovative use of mirrors to reflect sunlight during the day and fire at night..</p>
      </div>
      <div id="services" className={`Section ${activeSection === 'services' ? 'active' : ''}`}>
        <h2>Pyramid of Giza</h2>
        <img src='http://4.bp.blogspot.com/-iWyp6DacdZA/US8hOTmK96I/AAAAAAAAAs4/tmzHznlEN6I/s1600/The-Pyramids-Giza.jpg' width="500px" height="300px" alt="Pyramid of Giza" />
        <p>The Great Pyramid of Giza (Egypt): Built over 4,500 years ago, the Great Pyramid is the oldest and largest of the three pyramids in Giza. It was constructed as a tomb for the Pharaoh Khufu and is the only one of the Seven Wonders still largely intact. The precision of its construction and the mystery surrounding its purpose and construction methods make it a symbol of ancient Egypt's architectural prowess..</p>
      </div>
      <div id="contact" className={`Section ${activeSection === 'contact' ? 'active' : ''}`}>
        <h2>The Hanging Gardens</h2>
        <img src='https://tse3.mm.bing.net/th?id=OIP.mc2wYIOP1arP7soRcytJWgHaEo&pid=Api&P=0&h=180' width="500px" height="300px" alt="The Hanging Gardens" />
        <p>The Hanging Gardens of Babylon (Iraq): The Hanging Gardens are believed to have been a series of terraced gardens built in the ancient city of Babylon, near present-day Baghdad. They were constructed by King Nebuchadnezzar II for his wife, who missed the lush greenery of her homeland. While there is debate among historians about their existence, they are often depicted as a marvel of engineering and horticulture..</p>
      </div>
      <div id="first" className={`Section ${activeSection === 'first' ? 'active' : ''}`}>
        <h2>The Statue of Zeus</h2>
        <img src='https://malevus.com/wp-content/uploads/2022/09/The-Statue-of-Zeus-at-Olympia.jpeg' width="500px" height="300px" alt="The Statue of Zeus" />
        <p>The Statue of Zeus at Olympia (Greece): Created by the renowned Greek sculptor Phidias around 435 BC, the Statue of Zeus was a colossal depiction of the king of the Greek gods. It stood approximately 12 meters (40 feet) tall and was housed in the Temple of Zeus at Olympia. The statue was renowned for its craftsmanship and was considered one of the greatest achievements of ancient Greek art..</p>
      </div>
      <div id="second" className={`Section ${activeSection === 'second' ? 'active' : ''}`}>
        <h2>The Temple of Artemis</h2>
        <img src='https://i2.wp.com/www.drivethruhistory.com/wp-content/uploads/2018/10/3_Temple-of-Artemis-A11.jpg?fit=2000%2C1117&ssl=1' width="500px" height="300px" alt="The Temple of Artemis" />
        <p>The Temple of Artemis at Ephesus (Turkey): The Temple of Artemis was dedicated to the Greek goddess Artemis and was located in the ancient city of Ephesus, near present-day Selçuk in Turkey. It was completed around 550 BC and was one of the largest temples of the ancient world. The temple was destroyed and rebuilt several times before its final destruction in 401 AD..</p>
      </div>
      <div id="third" className={`Section ${activeSection === 'third' ? 'active' : ''}`}>
        <h2>The Mausoleum at Halicarnassus</h2>
        <img src='https://wilstar.com/wp-content/uploads/2022/09/mausoleum-1.jpg' width="500px" height="300px" alt="The Mausoleum at Halicarnassus" />
        <p>The Mausoleum at Halicarnassus (Turkey): Built between 353 and 350 BC, the Mausoleum at Halicarnassus was a tomb built for Mausolus, the satrap of Caria in the Persian Empire, and his wife Artemisia II. It was renowned for its grandeur and was adorned with intricate sculptures and reliefs. The term "mausoleum" is derived from this magnificent tomb..</p>
      </div>
      <div id="fourth" className={`Section ${activeSection === 'fourth' ? 'active' : ''}`}>
        <h2>The Colossus of Rhodes</h2>
        <img src='https://blog.windstarcruises.com/content/uploads/2020/10/resize-AdobeStock_105729356.jpg'  width="500px" height="300px" alt="The Colossus of Rhodes" />
        <p>The Colossus of Rhodes (Greece): The Colossus of Rhodes was a giant bronze statue of the sun god Helios, erected in the city of Rhodes in 280 BC. It stood approximately 30 meters (100 feet) tall and was one of the tallest statues of the ancient world. The Colossus stood for only 54 years before being toppled by an earthquake, but its image remains iconic..</p>
      </div>
    </div>
  );
};

export default App;
