
import React, {useState, useEffect} from 'react'
import APIService from './APIService'

function Form(props) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        setTitle(props.article.title)
        setBody(props.article.body)

    },[props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, body})
        //.then(resp => console.log(resp))
        .then(resp => props.updatedData(resp))
        .catch(error => console.log(error))

    }

    const insertArticle = () => {
        APIService.InsertArticle({title, body})
        //.then(resp => console.log(resp))
        .then(resp => props.insertedArticle(resp))
        .catch(error => console.log(error))
    }

    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        
        
        >
            {props.article ? (
                <div className = "mb-3">

                <label htmlfor = "title" className = "form-label">NFT URL(OpenSea, Rarible, etc...)</label>
                <input type = "text" className = "form-control"
                value = {title}
                placeholder = "Please Enter Title"
                onChange = {(e) => setTitle(e.target.value)}
                />

                <label htmlfor = "body" className = "form-label">Description</label>
                <textarea
                rows = "5"
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                className = "form-control"
                placeholder = "Please Enter Description"

                />

                {
                    props.article.id ? <button
                    onClick = {updateArticle}
                    className = "btn btn-success mt-3"
                    >Update</button>
                    :

                    <button
                    onClick = {insertArticle}
                    className = "btn btn-success mt-3"
                    >Insert</button>

                }

                

                </div>


            ):null}


        </div>
    )
}

export default Form
