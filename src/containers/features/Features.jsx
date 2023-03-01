import React from 'react';
import { Feature } from '../../components'
import './features.css';

const featuresData = [
    {
        title: 'How does it work',
        text: 'FWhen using GPT-3, it seems like pure magic. Or like a human being is on the other end generating a response. But nothing is further from the truth: its a neural network that has been trained on 175 billion parameters.',
    },
    {
        title: 'Research in AI',
        text: 'OpenAI is an Artificial Intelligence research laboratory, which conducts research in the field of AI. The goal of this laboratory, as the official site states, is to "promote and develop friendly AI in a way that benefits humanity as a whole".',
    },
    {
        title: 'OpenAI API',
        text: 'The OpenAI API can be applied to virtually any task that involves understanding or generating natural language or code. We offer a spectrum of models with different levels of power suitable for different tasks, as well as the ability to fine-tune your own custom models',
    },
    {
        title: 'The Future of AI',
        text: 'Slowly but surely, AI is sneaking into our lives. And just like Augmented Reality, AI has the power to enhance our lives in ways we can’t even imagine. But prudence is in order, as it can go wrong really quickly: a biased AI could result in all sorts of catastrophic events.',
    },
];

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>The Futre is Now and You Just Need to Realize it. Step into the Future Today and Make it Happen</h1>
                <p>Request Early Access</p>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    )
}

export default Features