import React from 'react'
import SearchCompanies from '../components/companies/SearchCompanies'
import companyinfo from '../data/companyinfo'
import Company from '../components/companies/Company'


const Companies = () => {
  const renderComapnies = companyinfo.map((company) => (
    <Company
      key={company.id}
      logo={company.logo}
      name={company.name}
      industry={company.industry}
      founded={company.founded}
      employees={company.employees}
      headquarters={company.headquarters}
      rating={company.rating}
    />
  ))
  return (
    <div className='my-6 px-4'>
      <SearchCompanies />

      <div className='flex flex-col gap-4 mt-8'>
        {renderComapnies}
      </div>
    </div>
  )
}

export default Companies
