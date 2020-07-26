import React from "react";
import "./App.css";
import { Container, Grid, Button } from "semantic-ui-react";
import Table from "./components/Table";
import SelectMenu from "./components/SelectMenu";

function App() {
  return (
    <Container className="root_container">
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <label className="root_container-label">Month :</label>
            <SelectMenu />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <label className="root_container-label">Year :</label>
            <SelectMenu />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <label className="root_container-label">Amount :</label>
            <SelectMenu />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns="6">
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Button primary>Search</Button>
          </Grid.Column>
          <Grid.Column>
            <Button primary>Clear All</Button>
          </Grid.Column>
          <Grid.Column>
            <Button primary>Export</Button>
          </Grid.Column>
          <Grid.Column>
            <Button primary>Columns</Button>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
      <Table />
    </Container>
  );
}

export default App;
