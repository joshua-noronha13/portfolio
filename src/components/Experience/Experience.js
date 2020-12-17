import React from 'react';
import { Container } from 'react-bootstrap';

export default function Experience() {
  return (
    <>
      <Container style={{ marginTop: '3em' }}>
        <h1 style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '30px' }}>Experience</h1>
        <span style={{ color: 'var(--secondary)', marginTop: '1.1em', marginBottom: '20px' }}>
          <div>
            <span style={{ color: 'var(--fontColor)', fontSize: '1.2rem' }}>System Engineer</span>
            <span style={{ float: 'right', color: 'var(--subsecondary)', fontSize: '0.9rem' }}>(July 2019 - Present)</span>
          </div>
          <div>Tata Consultancy Services</div>
          <div style={{ marginTop: '1.5em', fontSize: '0.9rem' }}>
            <ul>
              <li>
                Currently developing a Serverless Backend for an overseas client in Node.js,&nbsp;
                hosted in Azure Functions and designed the database in Azure SQL.
              </li>
              <li>
                Developed pipelines in Azure Devops for events like&nbsp;
                push on a particular branch.&nbsp;
                Also used Logic Apps to trigger functions on events like CSV upload.
              </li>
              <li>
                Built a stable and maintainable codebase for an overseas client in Angular.js&nbsp;
                using various open source libraries.
                Created various complex, accurate and reusable UI components based on
                Wireframes.
              </li>
            </ul>
          </div>
        </span>
        <span style={{ color: 'var(--secondary)', marginTop: '1.1em' }}>
          <div>
            <span style={{ color: 'var(--fontColor)', fontSize: '1.2rem' }}>IT Intern</span>
            <span style={{ float: 'right', color: 'var(--subsecondary)', fontSize: '0.9rem' }}>
              (December 2017 – February 2018)
            </span>
          </div>
          <div>Jet Airways</div>
          <div style={{ marginTop: '1.5em', fontSize: '0.9rem' }}>
            <ul>
              <li>
                Worked on making a Web Application in Serenity along with a Backend in Node.js&nbsp;
                that fetches records from MySQL and OracleDB using filters and sends&nbsp;
                customized emails as well as SMS to them.
              </li>
            </ul>
          </div>
        </span>
      </Container>
    </>
  );
}
