/**
 * @file Performance
 * @date 2022-01-14
 * @author Chaman
 * @lastModify  2022-01-14
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { BaseSyntheticEvent, useState } from 'react';
import XLSX, { CellObject } from 'xlsx';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface TableType {
    header: Array<string> | undefined;
    results: unknown[];
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Performance = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    // const [tableData, setTableData] = useState<TableType>();
    const [tableData, setTableData] = useState<Array<unknown>>([]);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const getHeaderRow = (sheet: XLSX.WorkSheet) => {
        const headers: Array<string> = [];
        const range = sheet['!ref'] && XLSX.utils.decode_range(sheet['!ref']);
        if (!range) {
            return;
        }
        let C;
        const R = range.s.r;
        /* start in the first row */
        for (C = range.s.c; C <= range.e.c; ++C) {
            /* walk every column in the range */
            const cell: CellObject = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
            /* find the cell in the first row */
            let hdr = 'UNKNOWN ' + String(C); // <-- replace with your desired default
            if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
            headers.push(hdr);
        }
        return headers;
    };
    const readerData = (rawFile: File) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target === null) {
                    return;
                }
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const header = getHeaderRow(worksheet);
                const results = XLSX.utils.sheet_to_json(worksheet);
                const tableData = {
                    header,
                    results,
                };
                setTableData(tableData.results)
                generateExportData(tableData);
                resolve('upload successful');
            };
            reader.readAsArrayBuffer(rawFile);
        });
    };
    const handleChangeInput = (e: BaseSyntheticEvent) => {
        const files = e.target.files;
        const rawFile = files[0];
        if (rawFile !== null) {
            readerData(rawFile);
        }
        e.target.value = null
    };
    const generateExportData = ({ header, results }: TableType) => {
        const userRelations = {
            'Development Task Type( 开发任务类型 )': '任务类型',
            'Name': '任务名称',
            'TaskNumber(任务编号)': 'use case/task 对应号码',
            'Completed At': '约定完成时间',
            'Due Date': '实际完成时间',
            'Task Score(项目评分)': '主管评任务质量',
            'Created At': 'Created At',
        };
        var newArr = results.map((item) => {
            var userInfo = {};
            Object.keys(item as string).forEach((key) => {
                userInfo[userRelations[key]] = (item as string)[key];
            });
            return userInfo;
        });
        newArr.unshift({
            任务类型: '雇员姓名',
            任务名称: 'lcm',
        });
        setTableData([...newArr])
    };
    const exportData = () => {
        const headers = {
            '任务类型': '任务类型',
            '编号': '编号',
            '任务名称': '任务名称',
            'use case/task 对应号码': 'use case/task 对应号码',
            '约定完成时间': '约定完成时间',
            '实际完成时间': '实际完成时间',
            '准时交付': '准时交付',
            '自评任务质量': '自评任务质量',
            '自评符合规范': '自评符合规范',
            '自评文档质量': '自评文档质量',
            '主管评任务质量': '主管评任务质量',
            '主管评符合规范': '主管评符合规范',
            '主管评文档质量': '主管评文档质量',
            '第三方': '第三方',
            '第三方评分': '第三方评分',
            '第三方Note': '第三方Note',
            '最终评分': '最终评分'
        }
        // 导出excel
        import('../../vendor/Export2Excel').then(async excel => {
            //  excel是引入文件的导出对象
            // 导出  header从哪里来
            // data从哪里来
            // 现在没有一个接口获取所有的数据
            // 获取员工的接口 页码 每页条数    100   1 10000
            // const { rows } = await getEmployeeList({ page: 1, size: this.page.total })
            console.log('data', tableData)
            // const multiHeader = [['任务类型', '任务名称', '', '', '', '', '主管评任务质量']]
            // const merges = ['A1:A2', 'B1:F1', 'G1:G2'] // 合并单元格
            excel.export_json_to_excel({
                header: Object.keys(headers),
                data: tableData,
                filename: '任务完成绩效',
            })
        })
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div>
            <div>
                <h1 style={{ fontSize: '20px' }}>上传</h1>
                <input type="file" name="导入" onChange={handleChangeInput} />
            </div>
            <div style={{ marginTop: '10rem' }}>
                <button onClick={exportData}>导出</button>
            </div>
        </div>
    );
};
export default Performance;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
