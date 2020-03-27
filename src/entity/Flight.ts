import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum StatusType {
  checkIn = 'check-in',
  gateClosing = 'gate-closing',
  scheduled = 'scheduled',
  delayed = 'delayed',
  canceled = 'canceled',
  boarding = 'boarding',
  departed = 'departed',
  contactAirline = 'contact-airline',
  onTime = 'on-time',
  unkonow = 'unknow',
  delayedLanded = 'delayed-landed',
  expected = 'expected',
  landed = 'landed'
}

@Entity()
export default class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  /** Номер рейса */
  @Column({nullable: true})
  number: string;

  /** Тип самолёта */
  @Column({nullable: true})
  aircraftType: string;

  /** Статус рейса */
  @Column('enum' , {
    enum: StatusType,
    default: StatusType.unkonow,
  })
  status: StatusType;

  /** Перевозчик */
  @Column({nullable: true})
  airlines: string;

  /** Место вылета */
  @Column({nullable: true})
  from: string;

  /** Время вылета по расписанию */
  @Column('time without time zone', {nullable: true})
  std: Date;

  /** Фактическое время вылета */
  @Column('time without time zone', {nullable: true})
  atd: Date;

  /** Место приземления */
  @Column({nullable: true})
  to: string;

  /** Время приземления по расписанию */
  @Column('time without time zone', {nullable: true})
  sta: Date;

  /** Фактическое время призмеления */
  @Column('time without time zone', {nullable: true})
  eta: Date;

  /** Время задержки взлёта */
  @Column('interval', {nullable: true})
  delayedTime: Date;

  /** Время задержки посадки */
  @Column('interval', {nullable: true})
  delayedLandedTime: Date;

  @Column({default: true})
  show: boolean;
}
