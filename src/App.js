import React from 'react';
import './App.css';

import head from './assets/head.jpg';
import avatar from './assets/avatar.png';

function App() {
  return (
    <div className="App">
      <header className="App__header">
      <img src={head} alt="crane-chauve" />
        <h1 className="App__header__title">Pourquoi embaucher un chauve ? </h1>
          <div className="App__header__introduction">
          Quels sont les avantages d'embaucher un chauve ? La question pourrait être plus généraliste et se poser de la façon suivante : quels sont les avantages que peut avoir un homme qui perd ses cheveux ?
          Je n'ai pas la réponse absolue mais j'ai des arguments basés sur l'humour.
        </div>
      </header>      
      <article className="App__article">
        <h2 className="App__article__title">
        <img src={avatar} alt="avatar__chauve"></img>
        Caractère forgé
        </h2>
        Qu'on se le dise un homme qui perd ses cheveux subira constamment les réflexions et moqueries de son entourage. Dès lors que le chauve est blindé face à la critique, le chauve le sera pour beaucoup de choses. De ce fait, cela forge un caractère plus solide qu'un autre. Devant un moment de stress, de pression le chauve est plus fort et moins sensible. 
      </article>
      <article className="App__article">
        <h2 className="App__article__title">
        <img src={avatar} alt="avatar__chauve"></img>
        Gain de temps
        </h2>
        Le meilleur argument. Le chauve n'est jamais en retard ! Pas besoin de passer 3h dans la salle de bain pour coiffer sa chevelure soyeuse. Le chauve gagne un temps fou, pendant que d'autres sont encore en train de se bichonner devant le miroir, le chauve peut s'occuper d'autre chose.
      </article>
      <article className="App__article">
        <h2 className="App__article__title">
        <img src={avatar} alt="avatar__chauve"></img>
        Un atout
        </h2>
        Puisqu'on ne va pas regarder les cheveux du chauve en premier (logique!) on va très vite trouver un autre atout. Le chauve inspire la confiance et la sympathie. 
      </article>
      <article className="App__article">
        <h2 className="App__article__title">
        <img src={avatar} alt="avatar__chauve"></img>
        Hygiène irréprochable
        </h2>
        Des collègues qui sentent mauvais ou qui reflètent une mauvaise hygiène corporelle, avouez-le, c'est toujours embarrassant et pas toujours plaisant à cotoyer. Dites-vous que le chauve n'aura pas ce problème là ! 
      </article>
      <article className="App__article">
        <h2 className="App__article__title">
        <img src={avatar} alt="avatar__chauve"></img>
          Aucune déception
        </h2>
        Le mot est peut-être fort mais c'est vrai. Le chauve, qu'on le voit à 8h du matin ou à 19h, il sera le même. Un homme avec une belle chevelure n'aura peut-être pas la même coupe de cheveux en fin de journée que le matin à son arrivée. Cette petite différence à son importance : pas d'épi matinaux et toujours impeccable ! 
      </article>
      <footer className="App__footer">
        <h2>
        Alors ? Toujours pas convaincu d'embaucher un chauve ? 
        </h2>
      </footer>
    </div>
  );
}

export default App;
