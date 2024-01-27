// pages/Project/DetailProjectPage.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DetailProject from '../../components/Projects/DetailProject'; // Sesuaikan path import dengan struktur folder Anda
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import './DetailProjectPage.css';

function DetailProjectPage() {
  const { theme } = useContext(ThemeContext);
  const { projectId } = useParams();

  // Menemukan proyek berdasarkan ID di params
  const project = projectsData.find((p) => p.id === parseInt(projectId));

  return (
    <div className="detail-container">
      {project && (
        <>
          <DetailProject projectData={project} />
        </>
      )}
    </div>
  );
}

export default DetailProjectPage;
