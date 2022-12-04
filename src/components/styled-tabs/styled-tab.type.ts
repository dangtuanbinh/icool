export interface Tab {
  id: number;
  title: string;
}

export interface IStyledTabProps {
  tabs?: Tab[];
  tabSelected?: string;
  setTabSelected: React.Dispatch<React.SetStateAction<any>>;
}
