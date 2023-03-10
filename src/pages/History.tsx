import { HistoryContainer, TextHeadInformation, TableRowContainer,Status } from "./HistoryStyle";

export function History(){
    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1>

            <table>
                <thead>
                    <tr>
                        <TextHeadInformation>Tarefa</TextHeadInformation>
                        <TextHeadInformation>Duração</TextHeadInformation>
                        <TextHeadInformation>Início</TextHeadInformation>
                        <TextHeadInformation>Status</TextHeadInformation>
                    </tr>
                </thead>
                <tbody>
                    <TableRowContainer>
                        <td>Conserto de débitos técnicos </td>
                        <td>25 minutos</td>
                        <td>Há cerca de 2 meses</td>
                        <td><Status colorStatus="green">Concluído</Status></td>
                    </TableRowContainer>
                    <TableRowContainer>
                        <td>Conserto de débitos técnicos </td>
                        <td>25 minutos</td>
                        <td>Há cerca de 2 meses</td>
                        <td>
                            <Status colorStatus="green">Concluído</Status>
                        </td>
                    </TableRowContainer>
                    <TableRowContainer>
                        <td>Conserto de débitos técnicos </td>
                        <td>25 minutos</td>
                        <td>Há cerca de 2 meses</td>
                        <td>
                            <Status colorStatus="green">Concluído</Status>
                        </td>
                    </TableRowContainer>
                    <TableRowContainer>
                        <td>Conserto de débitos técnicos </td>
                        <td>25 minutos</td>
                        <td>Há cerca de 2 meses</td>
                        <td>
                            <Status colorStatus="red">Interrompido</Status>
                        </td>
                    </TableRowContainer>
                    <TableRowContainer>
                        <td>Conserto de débitos técnicos </td>
                        <td>25 minutos</td>
                        <td>Há cerca de 2 meses</td>
                        <td>
                            <Status colorStatus="yellow">Em andamento</Status>
                        </td>
                    </TableRowContainer>
                </tbody>
            </table>
        </HistoryContainer>
    );
}