import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('NOOOOOO');
    // }
    // const cardsArray = robots.map((user, i) => {
    //     return (
    //         <Card
    //             key={robots[i].id}
    //             id={robots[i].id}
    //             name={robots[i].name}
    //             email={robots[i].email}
    //             username={robots[i].username}
    //         />
    //     );
    // });

    return  (
        <>
          {
            robots.map((user, i) => {
                return (
                    <Card
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                        username={robots[i].username}
                    />
                );
            })
        }
        </>
    )
}

export default CardList;