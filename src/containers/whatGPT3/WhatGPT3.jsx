import React from 'react';
import { Feature } from '../../components'
import './whatGPT3.css';


const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='whgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="What is GPT-3" text="GPT-3, or the third generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text." />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Chatbots" text="A chatbot (coined from the term “chat robot”) is a computer program that simulates human conversation either by voice or text communication, and is designed to help solve a problem." />
                <Feature title="Knowledgebase" text="In general, a knowledge base is a centralized repository of information. A public library, a database of related information about a particular subject and whatis.com could all be considered examples of knowledge bases." />
                <Feature title="Education" text="Education is both the act of teaching knowledge to others and the act of receiving knowledge from someone else. Education also refers to the knowledge received through schooling or instruction and to the institution of teaching as a whole." />
            </div>
        </div>
    )
}

export default WhatGPT3