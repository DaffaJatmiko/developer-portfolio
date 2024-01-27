import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import './DetailProject.css';
import progja from '../../assets/png/potoKel29.jpg';

const useStyles = makeStyles((theme) => ({
  detailContainer: {
    width: '100%',
    padding: '30px',
    backgroundColor: '#242323',
    color: 'white',
    borderRadius: '15px',
    boxShadow: theme.shadows[3],
    marginBottom: '10px',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    marginRight: '10px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: theme.tertiary,
    },
  },
  heading: {
    color: theme.secondary,
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  paragraph: {
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  dokumentasiImage: {
    width: '100%', // Atur lebar gambar menjadi 100%
    height: '400px',
    borderRadius: '8px',
    marginBottom: '10px', // Jarak antar gambar
  },
}));

function DetailProject({ projectData }) {
  const classes = useStyles();
  const {
    projectName,
    deskripsiSingkat,
    latarBelakang,
    rumusanMasalah,
    target,
    output,
    projectDesc,
    dokumentasi,
  } = projectData;

  return (
    <div className={`detailContainer ${classes.detailContainer}`}>
      <Link to="/" className={classes.backButton}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>

      <h1 className={classes.heading}>{projectName}</h1>

      <h2 className={classes.heading}>Deskripsi Singkat Progja</h2>
      <p className={classes.paragraph}>{deskripsiSingkat}</p>

      <h2 className={classes.heading}>Masalah</h2>
      <p className={classes.paragraph}>{rumusanMasalah}</p>

      <h2 className={classes.heading}>Sasaran</h2>
      <p className={classes.paragraph}>{target}</p>

      <h2 className={classes.heading}>Output</h2>
      <p className={classes.paragraph}>{output}</p>

      <h2 className={classes.heading}>Dokumentasi</h2>
      <Grid container spacing={2}>
        {dokumentasi.map((image, index) => (
          <Grid item xs={12} md={4} key={index}>
            <img
              className={classes.dokumentasiImage}
              src={dokumentasi[index]} // Ganti dengan sumber gambar yang sesuai
              alt={`Dokumentasi ${index + 1}`}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DetailProject;
