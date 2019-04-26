export class Testcase {

  public id: number;
  public title: string;
  public reference: string;
  public changedBy: string;
  public description?: string;
  public status?: string;
  public diff?: object;
  public labels?: Array<string>;
  public steps?: Array<string>;

  constructor(options: Partial<Testcase>) {
    Object.assign(this, options);
  }

}
