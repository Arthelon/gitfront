import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import FrameworkItem from "./FrameworkItem";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  data: state
});

const FrameworkGrid = ({ data }) => {
  return (
    <Grid stackable columns={4}>
      <Grid.Row>
        {data &&
          data.frameworks &&
          data.frameworks.sort((a, b) => a.stars < b.stars).map((z, index) => (
            <Grid.Column width={4} key={z.framework}>
              <FrameworkItem data={z} key={z.framework} rank={index + 1} />
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
};

export default connect(mapStateToProps)(FrameworkGrid);
