import React, {useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/product-card/ProductCard'
import '../styles/all-food.css'
import ReactPaginate from 'react-paginate'
import '../styles/pagination.css'

const AllFoods = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState(0)
  
  const searchedProduct = products.filter((item)=>{
    if(searchTerm.value == '') return item
    if(item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return item
  })
  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

  const pageCount = Math.ceil(searchedProduct.length / productPerPage)

  const changePage = ({selected}) =>{
    setPageNumber(selected)
  }

  return <Helmet title='All-Foods'>
    <CommonSection title='All Foods'/>

    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6' xs='12'>
          <div className="search_widget d-flex align-items-center justify-content-between">
            <input type="text" placeholder="I'm looking for..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            <span><i class="ri-search-line"></i></span>
          </div>
          </Col>
          <Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
          <div className="sorting_widget text-end">
            <select className='w-50'>
              <option>Default</option>
              <option value="ascending">Alpabetically, A-Z</option>
              <option value="descending">Alpabetically, Z-A</option>
              <option value="high-price">High price</option>
              <option value="low-price">Low price</option>

            </select>
          </div>
          </Col>

          {
            displayPage.map((item) => (
              <Col lg='3' md='4' sm='6' sx='6' key={item.id} className='mb-4'>
              <ProductCard item={item}/>
              </Col>
            ))
          }

          <div>
            <ReactPaginate 
            pageCount={pageCount} 
            onPageChange={changePage}
            previousLabel = {'Prev'}
            nextLabel = {'Next'}
            containerClassName='paginationBtns'
            />
          </div>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default AllFoods