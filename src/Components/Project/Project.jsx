import React from 'react'
import "./Project.css"
import Card from '../Card/Card'
import { useState } from 'react'
const Project = () => {
  return (
    <div id='projects'>
        <h1 id='project-title'>2+ Years of Experienced in Projects</h1>
        <div className="slider">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Project