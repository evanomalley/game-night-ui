import styled from "styled-components";

const StyledTable = styled.table``;

type GamesTablePropsType = {
  data: any[];
};

export const GamesTable = (props: GamesTablePropsType) => {
  const { data } = props;
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Min Players</th>
        <th>Max Players</th>
      </tr>
      {data.map((element) => {
        return (
          <tr>
            <td>{element.name}</td>
            <td>{element.description}</td>
            <td>{element.minPlayers}</td>
            <td>{element.maxPlayer}</td>
          </tr>
        );
      })}
    </table>
  );
};
