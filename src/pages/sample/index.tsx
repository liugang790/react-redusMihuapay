import * as React from 'react'
import {
  Route,
} from 'react-router'
import Sample from './sample'
import Sample2 from './sample2'

export const Index = (
  <Route path="/sample/">
    <Route path="1" component={Sample} />
    <Route path="2" component={Sample2} />
  </Route>
)

export default Index
