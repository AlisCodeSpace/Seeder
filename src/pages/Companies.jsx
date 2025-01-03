import React from 'react'
import SearchCompanies from '../components/companies/SearchCompanies'
import companies from '../data/companies'
import CompanyCard from '../components/companies/CompanyCard'


const Companies = () => {
  const renderComapnies = companies.map((company) => (
    <CompanyCard
      key={company.id}
      logo={company.logo}
      name={company.name}
      path={company.path}
    />
  ))
  
  return (
    <div className='my-6 px-2'>
      {/* <SearchCompanies /> */}

      <div className='flex flex-wrap items-center justify-center gap-3 mt-8'>
        {renderComapnies}
      </div>
    </div>
  )
}

export default Companies
