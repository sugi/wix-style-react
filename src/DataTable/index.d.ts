import * as React from 'react';
import { OmitPolyfill } from '../common';
import { TooltipNewProps } from '../Tooltip';
export type RowDataDefaultType = any;

export interface DataTableProps<RowData = RowDataDefaultType> {
  dataHook?: string;
  id?: string;
  data?: RowData[];
  columns: DataTableColumn[];
  showHeaderWhenEmpty?: boolean;
  rowDataHook?: string | DataTableRowDataHookFn;
  rowClass?: string;
  dynamicRowClass?: (rowData: RowData, rowNum: number) => string;
  isRowSelected?: (rowData: RowData, rowNum: number) => boolean;
  isRowHighlight?: (rowData: RowData, rowNum: number) => boolean;
  onRowClick?: (rowData: RowData, rowNum: number) => void;
  onMouseEnterRow?: (rowData: RowData, rowNum: number) => void;
  onMouseLeaveRow?: (rowData: RowData, rowNum: number) => void;
  onSortClick?: (column: DataTableColumn, colNum: number) => void;
  infiniteScroll?: boolean;
  itemsPerPage?: number;
  width?: string;
  skin?: DataTableSkin;
  loadMore?: () => void;
  hasMore?: boolean;
  loader?: React.ReactNode;
  useWindow?: boolean;
  scrollElement?: HTMLElement | React.RefObject<any>;
  rowVerticalPadding?: DataTableRowVerticalPadding;
  /**
   * @deprecated
   */
  thPadding?: string;
  /**
   * @deprecated
   */
  thHeight?: string;
  /**
   * @deprecated
   */
  thFontSize?: string;
  /**
   * @deprecated
   */
  thBorder?: string;
  /**
   * @deprecated
   */
  thColor?: string;
  /**
   * @deprecated
   */
  thOpacity?: string;
  /**
   * @deprecated
   */
  thBoxShadow?: string;
  /**
   * @deprecated
   */
  thLetterSpacing?: string;
  rowDetails?: (rowData: RowData, rowNum: number) => React.ReactNode;
  allowMultiDetailsExpansion?: boolean;
  hideHeader?: boolean;
  showLastRowDivider?: boolean;
  virtualized?: boolean;
  virtualizedTableHeight?: number;
  virtualizedLineHeight?: number;
  virtualizedListRef?: React.LegacyRef<any>;
  selectedRowsIds?: (string | number)[];
}

export default class DataTable<RowData = RowDataDefaultType> extends React.Component<DataTableProps<RowData>> {}

export type DataTableColumnAlign = 'start' | 'center' | 'end';
export type DataTableRowDataHookFn<RowData = RowDataDefaultType> = (rowData: RowData, rowNum: number) => string;
export type DataTableSkin = 'standard' | 'neutral';
export type DataTableRowVerticalPadding = 'medium' | 'large';
export type DataTableColumn<RowDataType = RowDataDefaultType> = {
  title: React.ReactNode;
  render: (row: RowDataType, rowNum: number) => React.ReactNode;
  width?: string;
  important?: boolean;
  sortable?: boolean;
  sortDescending?: boolean;
  style?: React.CSSProperties;
  infoTooltipProps?: OmitPolyfill<
  Partial<TooltipNewProps>,
  'dataHook' | 'moveBy' | 'upgrade'
>;
  align?: DataTableColumnAlign;
};
