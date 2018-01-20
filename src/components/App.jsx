import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

import AccordionGrid from './AccordionGrid/AccordionGrid';


const StyledApp = styled.div`
    max-width: 960px;
    margin: 2rem auto;
    padding: 1rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 0 0 1em;
    text-align: center;
`;

const TileOneContent = () => (
    <React.Fragment>
        <h4 style={{margin: 0}}>Tile One</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam exercitationem, facere eaque vero corporis dolorum autem dolores nostrum, voluptate excepturi aliquam? Dolorum quaerat nihil adipisci molestias itaque. Sequi eaque, voluptates quam facere error molestiae? Vel excepturi porro dolore, repellat provident voluptatibus quasi inventore magnam nesciunt veritatis omnis hic totam!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam exercitationem, facere eaque vero corporis dolorum autem dolores nostrum, voluptate excepturi aliquam? Dolorum quaerat nihil adipisci molestias itaque. Sequi eaque, voluptates quam facere error molestiae? Vel excepturi porro dolore, repellat provident voluptatibus quasi inventore magnam nesciunt veritatis omnis hic totam!</p>
    </React.Fragment>
);

const App = () => {
    const accordionData = [
        {
            title: 'Tile 1',
            icon: 'home',
            content: <TileOneContent />
        },
        {
            title: 'Tile 2',
            icon: 'gears',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam exercitationem, facere eaque vero corporis dolorum autem dolores nostrum, voluptate excepturi aliquam? Dolorum quaerat nihil adipisci molestias itaque. Sequi eaque, voluptates quam facere error molestiae? Vel excepturi porro dolore, repellat provident voluptatibus quasi inventore magnam nesciunt veritatis omnis hic totam!'
        },
        {
            title: 'Tile 3',
            icon: 'bank',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam exercitationem, facere eaque vero corporis dolorum autem dolores nostrum, voluptate excepturi aliquam? Dolorum quaerat nihil adipisci molestias itaque. Sequi eaque, voluptates quam facere error molestiae? Vel excepturi porro dolore, repellat provident voluptatibus quasi inventore magnam nesciunt veritatis omnis hic totam!'
        },
        {
            title: 'Tile 4',
            icon: 'group',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam exercitationem, facere eaque vero corporis dolorum autem dolores nostrum, voluptate excepturi aliquam? Dolorum quaerat nihil adipisci molestias itaque. Sequi eaque, voluptates quam facere error molestiae? Vel excepturi porro dolore, repellat provident voluptatibus quasi inventore magnam nesciunt veritatis omnis hic totam!'
        },
        {
            title: 'Tile 5',
            icon: 'warning',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam exercitationem, facere eaque vero corporis dolorum autem dolores nostrum, voluptate excepturi aliquam? Dolorum quaerat nihil adipisci molestias itaque. Sequi eaque, voluptates quam facere error molestiae? Vel excepturi porro dolore, repellat provident voluptatibus quasi inventore magnam nesciunt veritatis omnis hic totam!'
        },
        {
            title: 'Tile 6',
            icon: 'handshake-o',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam exercitationem, facere eaque vero corporis dolorum autem dolores nostrum, voluptate excepturi aliquam? Dolorum quaerat nihil adipisci molestias itaque. Sequi eaque, voluptates quam facere error molestiae? Vel excepturi porro dolore, repellat provident voluptatibus quasi inventore magnam nesciunt veritatis omnis hic totam!'
        }
    ];

    return (
        <StyledApp>
            <Title>Accordion Grid Demo</Title>
            <AccordionGrid
                data={accordionData}
                columns={3}
                duration={600}
                gap='0.5rem'
            />
        </StyledApp>
    )
};

export default App;
