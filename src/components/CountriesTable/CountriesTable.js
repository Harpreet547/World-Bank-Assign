import React, { Component } from 'react';
import { 
  Table,
  Grid,
  Row,
  Col,
  Pagination,
  PageHeader,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';
import countriesTableStyle from './CountriesTableStyle';

class CountriesTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      incomeLevelFilter: '',
      incomeLevelFilterKey: -1,
      regionFilter: '',
      regionFilterKey: -1,
      lendingTypeFilter: '',
      lendingTypeFilterKey: -1,
      page: 1
    }
  }

  componentDidMount() {
    this.fetchCountries(1);
    this.props.fetchIncomeLevels();
    this.props.fetchRegions();
    this.props.fetchLendingTypes();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(
        this.state.incomeLevelFilter !== nextState.incomeLevelFilter ||
        this.state.regionFilter !== nextState.regionFilter ||
        this.state.lendingTypeFilter !== nextState.lendingTypeFilter
      ) {
        this.fetchCountries(1, nextState.incomeLevelFilter, nextState.regionFilter, nextState.lendingTypeFilter);
    }
    return true;
  }


  handleFirstClick = () => {
    this.fetchCountries(1);
    this.setState({
      ...this.state,
      page: 1
    });
  }

  handleLastClick = () => {
    this.fetchCountries(this.props.pageDetail.pages);
    this.setState({
      ...this.state,
      page: this.props.pageDetail.pages
    });
  }

  handlePrevClick = () => {
    let prevPage = this.props.pageDetail.page - 1;
    prevPage = prevPage > 0 ? prevPage : 1;
    this.fetchCountries(prevPage);
    this.setState({
      ...this.state,
      page: prevPage
    });
  }

  handleNextClick = () => {
    let nextPage = this.props.pageDetail.page + 1;
    nextPage = nextPage <= this.props.pageDetail.pages ? nextPage : this.props.pageDetail.pages;
    this.fetchCountries(nextPage);
    this.setState({
      ...this.state,
      page: nextPage
    });
  }

  handleIncomeFilterOnSelect = (eventKey) => {
    let incomeLevelID = '';
    if(eventKey !== -1) {
      let incomeLevel = this.props.incomeLevels[eventKey];
      if(incomeLevel.id) {
        incomeLevelID = incomeLevel.id;
      }
    }

    this.setState({
      ...this.state,
      incomeLevelFilter: incomeLevelID,
      incomeLevelFilterKey: eventKey
    });

  }

  handleRegionFilterOnSelect = (eventKey) => {
    let regionCode = '';
    if(eventKey !== -1) {
      let region = this.props.regions[eventKey];
      if(region.code) {
        regionCode = region.code;
      }

    }
    console.log(regionCode);
    this.setState({
      ...this.state,
      regionFilter: regionCode,
      regionFilterKey: eventKey
    });
  }


  handleLendingTypeFilterOnSelect = (eventKey) => {
    let lendingTypeID = '';
    if(eventKey !== -1) {
      let lendingType = this.props.lendingTypes[eventKey];
      if(lendingType.id) {
        lendingTypeID = lendingType.id;
      }
    }
    this.setState({
      ...this.state,
      lendingTypeFilter: lendingTypeID,
      lendingTypeFilterKey: eventKey
    });
  }

  fetchCountries = (
      page, 
      incomeLevelFilter = this.state.incomeLevelFilter, 
      regionFilter = this.state.regionFilter, 
      lendingFilter = this.state.lendingTypeFilter
    ) => {
    this.props.fetchCountries(page, incomeLevelFilter, regionFilter, lendingFilter);
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col>
            <PageHeader>
              World Bank Countries Database.
              <br/>
              <small>
                Filters:
                <DropdownButton 
                  id = 'region' 
                  title = 'Region'
                  style = { countriesTableStyle.dropDownBtns } 
                  onSelect = { this.handleRegionFilterOnSelect }>
                    <MenuItem active = { this.state.regionFilterKey === -1 ? true : false } eventKey = { -1 } >No Filter</MenuItem>
                    <MenuItem divider />
                    {
                      this.props.regions.map((region, i) => {
                        return (
                          <MenuItem active = { this.state.regionFilterKey === i ? true : false } key = { `regionDropdown${i}` } eventKey = { i } >{ region.name }</MenuItem>
                        )
                      })
                    }
                </DropdownButton>
                <DropdownButton 
                  id = 'lendingType' 
                  title = 'Lending Type'
                  style = { countriesTableStyle.dropDownBtns } 
                  onSelect = { this.handleLendingTypeFilterOnSelect }>
                    <MenuItem active = { this.state.lendingTypeFilterKey === -1 ? true : false } eventKey = { -1 } >No Filter</MenuItem>
                    <MenuItem divider />
                    {
                      this.props.lendingTypes.map((lendingType, i) => {
                        return (
                          <MenuItem active = { this.state.lendingTypeFilterKey === i ? true : false } key = { `lendingTypeDropdown${i}` } eventKey = { i } >{ lendingType.value }</MenuItem>
                        )
                      })
                    }
                </DropdownButton>
                <DropdownButton 
                  id = 'incomeLevel' 
                  title = 'Income Level'
                  style = { countriesTableStyle.dropDownBtns } 
                  onSelect = { this.handleIncomeFilterOnSelect }>
                    <MenuItem active = { this.state.incomeLevelFilterKey === -1 ? true : false } eventKey = { -1 } >No Filter</MenuItem>
                    <MenuItem divider />
                    {
                      this.props.incomeLevels.map((incomeLevel, i) => {
                        return (
                          <MenuItem active = { this.state.incomeLevelFilterKey === i ? true : false } key = { `incomeLevelDropdown${i}` } eventKey = { i } >{ incomeLevel.value }</MenuItem>
                        )
                      })
                    }
                </DropdownButton>
              </small>
            </PageHeader>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ISO2 Code</th>
                  <th>Name</th>
                  <th>Region</th>
                  <th>Capital</th>
                  <th>Lending Type</th>
                  <th>Income Level</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.countries.map((country) => {
                    return (
                      <tr key = {country.id}>
                        <th>{ country.id }</th>
                        <th>{ country.iso2Code }</th>
                        <th>{ country.name }</th>
                        <th>{ country.region.value }</th>
                        <th>{ country.capitalCity }</th>
                        <th>{ country.lendingType.value }</th>
                        <th>{ country.incomeLevel.value }</th>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>
            <Pagination>
              <Pagination.First onClick = { this.handleFirstClick }/>
              <Pagination.Prev onClick = { this.handlePrevClick } />
              <Pagination.Next onClick = { this.handleNextClick } />
              <Pagination.Last onClick = { this.handleLastClick } />
            </Pagination>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CountriesTable;
