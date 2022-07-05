import React from 'react';
import { Link } from 'react-router-dom';
import './Style/nav.css';
import './Style/body.css';

function Home() {
  return (
    <>
      <nav>
        <Link to="/">Math Magician</Link>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/calculator"> Calculator</Link>
          </li>
          <li>
            <Link to="/about">Quote</Link>
          </li>
        </ul>
      </nav>

      <div className="home-body">
        <h2>Welcome Math page</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          cumque, tenetur porro reprehenderit provident quaerat dolorem laborum
          hic iure, quo asperiores voluptates blanditiis pariatur minima nostrum
          vero quam voluptas dolore vitae earum minus corrupti alias? Error
          incidunt, fugiat consequuntur expedita explicabo iure ducimus dolorem
          perspiciatis, maxime minus eaque corrupti. Tenetur magni, architecto,
          culpa in iusto accusamus illo consectetur beatae veniam fuga officiis
          cumque amet provident! Enim error ullam ipsa tempore, non ad, magnam
          illum assumenda suscipit fugiat distinctio nesciunt asperiores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, culpa?
          Est, iusto quasi. Labore necessitatibus, minus cupiditate repellendus
          voluptas rerum qui corrupti numquam perferendis voluptatibus odit ex,
          accusamus, nam nostrum consequuntur esse! Deleniti, nemo. Est id
          mollitia magnam animi ducimus dolorem aspernatur nihil, laborum maxime
          reiciendis quidem ex veritatis itaque odit similique explicabo ipsa
          perferendis sit, sed doloremque beatae in minus culpa? Aliquam,
          commodi quidem officiis temporibus mollitia cupiditate dolorem
          aspernatur voluptatum? Iure explicabo possimus optio architecto
          maiores accusamus, non in vel quaerat, harum perspiciatis magni itaque
          numquam expedita? Voluptas necessitatibus maxime ratione facere
          incidunt, excepturi ex sunt, itaque eaque velit iste esse adipisci
          minima aliquam ipsum unde explicabo veniam. Ipsum fuga autem labore
          optio? Dignissimos, ipsam. Illum laboriosam assumenda accusamus
          debitis, non aspernatur ad adipisci? Vel debitis tempora officia nihil
          quis, inventore, iste esse et laborum magnam nostrum non eum omnis,
          sapiente explicabo molestiae quas totam? Enim necessitatibus
          laudantium iusto. Distinctio consequuntur libero deleniti rerum
          mollitia in natus provident magni illum non dolorum numquam impedit
          ipsa et dolorum quas nulla possimus debitis ipsa quasi perferendis
          placeat, dolore sapiente! Ipsa, mollitia aspernatur deleniti vitae
          doloribus autem. Vero rem recusandae soluta? Excepturi cum quisquam
          laboriosam blanditiis illo quos deserunt hic vero placeat qui fugit
          nostrum delectus quod omnis, doloribus esse nam ut!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus minima
          commodi accusantium. Soluta, ea. Doloremque magnam dolorum maxime
          officia natus?
        </p>
      </div>
    </>
  );
}

export default Home;
