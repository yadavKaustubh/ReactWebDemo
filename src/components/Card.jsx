import React from 'react'
import {Card,Button} from 'react-bootstrap'

const ExCard = () => {
    return (
        <>
            <Card style={{ width: '20rem' }}>
                <Card.Body >
                    <Card.Title>Sample Project Title</Card.Title>
                    <Card.Text>
                    Short Description about the project and its workings
                    </Card.Text>
                    <Button variant="secondary">Code Link</Button>
                </Card.Body>
                </Card>
        </>
    
    );
}

export default ExCard;