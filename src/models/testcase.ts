export class Testcase {

  constructor(
    public id: number,
    public title: string,
    public status: string,
    public description?: string,
    public diff?: object,
    public labels?: Array<string>,
    public steps?: Array<string>
    // public expectedresult?: string
  ) {  }

}
