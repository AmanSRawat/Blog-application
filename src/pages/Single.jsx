import React from 'react'
import Edit from '../assets/edit.png'
import Delete from '../assets/delete.png'
import { Link } from 'react-router'
import Menu from '../componenets/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src='https://static.toiimg.com/thumb/msid-103171133,width-748,height-499,resizemode=4,imgsize-40352/.jpg'/>
        <div className="user">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete}/>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione sit ab consectetur, praesentium sed blanditiis totam esse quia laboriosam minima cumque nihil impedit, explicabo porro alias neque et reprehenderit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur soluta dicta. Omnis, consectetur quo, nisi velit blanditiis porro voluptatibus esse amet facere laudantium unde. Magni aspernatur at possimus voluptatum enim rem pariatur expedita consequuntur modi odio perferendis id praesentium unde quibusdam, repellat animi quisquam accusantium sequi quod non excepturi? Voluptatibus placeat distinctio obcaecati, quam sunt ducimus, nemo neque, nihil nisi magnam minima. Optio sint enim ea accusantium corporis excepturi totam asperiores doloribus. Explicabo atque inventore reiciendis tenetur commodi, tempore laudantium quia ducimus, hic asperiores labore aliquid natus consectetur dignissimos, recusandae harum consequuntur nisi repellat consequatur! Ipsum inventore nemo nam quod quo velit rerum voluptatem odio. Pariatur illo asperiores enim. Nostrum quis rerum unde suscipit obcaecati numquam, ipsam veniam ducimus ea hic ipsa non ex? Fuga doloribus odio provident reprehenderit autem distinctio libero aspernatur ad commodi cupiditate possimus, tempore vitae labore deleniti! Voluptas dolore esse consequatur aut reiciendis illo aliquid iste cupiditate atque est! Saepe fugit minus ducimus sit ab facere, maxime, iste, quaerat quas amet animi veniam blanditiis similique assumenda? Ut explicabo reiciendis vel eligendi. Iusto vero a quae aliquam ipsum aliquid delectus amet nulla nostrum voluptates. Ducimus possimus autem in atque enim saepe, quibusdam accusamus fugiat distinctio quisquam iure doloribus temporibus nihil consectetur nesciunt maiores libero? Nemo eveniet cumque explicabo, quam architecto expedita harum alias corrupti quod, laborum totam necessitatibus quas eius provident accusantium maiores cupiditate omnis et blanditiis in. Laudantium, a hic sed iste excepturi soluta. Esse molestiae qui fugit repudiandae ducimus tenetur fugiat, doloremque quae cumque.</p>
      </div>
      <div className="menu">
      <Menu/>
      </div>
    </div>
  )
}

export default Single
