import React from 'react'

function ArticleList(props) {

    const editArticle = (article) => {

      props.editArticle(article)


    }

    return (
        <div>
            {props.articles && props.articles.map(article => {
            return (
              <div key = {article.id}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
                <p>{article.date}</p>
                <p>{article.deposit}</p>

                <div className = "row">
                    <div className = "col-md-1">
                        <button className = "btn btn-primary"
                        onClick = {() => editArticle(article)}
                        >Update</button>
                    </div>

                    <div className = "col">
                        <button className = "btn btn-danger">Delete</button>
                    </div>
               
                </div>

                <hr/>

          </div>
            )
          })}
            
        </div>
    )
}

export default ArticleList
