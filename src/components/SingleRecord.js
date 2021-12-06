import React from 'react'

function SingleRecord(props) {

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
                <p>{article.id}</p>

              

                <hr/>

          </div>
            )
          })}
        </div>
    )
}

export default SingleRecord
