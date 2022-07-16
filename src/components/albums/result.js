import {
  Box,
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
} from "@mui/material";

export default function Result() {
  const dummyData = (img, name, tracks, status) => {
    return { img, name, tracks, status };
  };
  const artists = [
    dummyData(
      "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      "Peter",
      10,
      "Active"
    ),
    dummyData(
      "https://randomuser.me/api/portraits/thumb/women/75.jpg",
      "Alice",
      4,
      "Active"
    ),
    dummyData(
      "https://randomuser.me/api/portraits/thumb/men/74.jpg",
      "Carson",
      13,
      "Active"
    ),
    dummyData(
      "https://randomuser.me/api/portraits/thumb/women/74.jpg",
      "Emily",
      15,
      "Active"
    ),
    dummyData(
      "https://randomuser.me/api/portraits/thumb/men/73.jpg",
      "Endy",
      18,
      "Active"
    ),
    dummyData(
      "https://randomuser.me/api/portraits/thumb/women/73.jpg",
      "Zoey",
      10,
      "Active"
    ),
  ];

  return (
    <Box sx={{ m: 2, mt: 4 }}>
      <Card>
        <Table>
          <TableHead>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Artists</TableCell>
            <TableCell>Track Count</TableCell>
            <TableCell>Action</TableCell>
          </TableHead>
          <TableBody>
            {artists.map((artist) => (
              <TableRow key={artist.name}>
                <TableCell align="center">
                  <Avatar src={artist.img} />
                </TableCell>
                <TableCell>{artist.name}</TableCell>
                <TableCell>{artist.tracks}</TableCell>
                <TableCell>{artist.status}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: "0.5rem" }}>
                    <Button variant="outlined" size="small" color="error">
                      Delete
                    </Button>
                    <Button variant="outlined" size="small">
                      Edit
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
}
